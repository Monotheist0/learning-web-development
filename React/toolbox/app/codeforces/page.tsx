/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useMemo } from "react";
import { RatingStats } from "@/components/tools/codeforces/rating-stats";
import { Input } from "@/components/ui/input";
import { useActionState } from "react";
import { analyzeHandle, type ActionsState } from "@/lib/codeforces";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import Link from "next/link";
import { CodeforcesSkeleton } from "@/components/tools/codeforces/codeforces-skeleton";
import { RatingGraph } from "@/components/tools/codeforces/rating-graph";

export default function CodeforcesPage() {
    const initialState: ActionsState = {
        message: null,
        errors: {},
        data: [] as any,
    };

    const [state, formAction, isPending] = useActionState(analyzeHandle, initialState);

    const counts = useMemo(() => {
        const stats: Record<number, number> = {};
        if (state.data) {
            state.data.forEach((sub: any) => {
                const rating = sub.problem.rating || 0;
                stats[rating] = (stats[rating] || 0) + 1;
            });
        }
        return stats;
    }, [state.data]);

    return (
        <main className="min-h-screen p-8 md:p-24 max-w-5xl mx-auto flex flex-col gap-12 text-[#B9986F]">
            <div className="flex items-center gap-4 text-sm text-[#706F6E]">
                <Link href="/" className="hover:text-[#E6C07B] transition-colors">
                    Home
                </Link>
                <span>/</span>
                <span className="text-[#b9986F]">Codeforces Investigation</span>
            </div>

            <div className="bg-[#1c1c1c] border border-[#272C31] p-8 rounded-4xl shadow-xl">
                <h2 className="text-2xl font-bold text-[#E6c07B] mb-6 uppercase tracking-widest italic">
                    Identify_Target
                </h2>

                <form action={formAction} className="flex flex-col gap-3">
                    <div className="flex gap-4">
                        <Input
                            name="handle"
                            placeholder="Enter Codeforces Handle..."
                            className="bg-[#0d0d0d] border-[#272c31] text-[#B9986F] placeholder:text-[#706F6E] focus-visible:ring-[#E6C07B]"
                        />
                        <Button
                            type="submit"
                            disabled={isPending}
                            className="bg-[#E6c07b] text-[#0d0d0d] hover:bg-[#d5805e] transition-all px-8 font-bold"
                        >
                            {isPending ? (
                                "ANALYZING..."
                            ) : (
                                <>
                                    <Search className="w-4 h-4 mr-2" /> ANALYZE
                                </>
                            )}
                        </Button>
                    </div>

                    {state.errors?.handle && (
                        <p className="text-red-500 text-xs italic mt-1">{state.errors.handle[0]}</p>
                    )}

                    {state.message && !state.data?.length && (
                        <p className="text-red-500 text-xs italic mt-1">{state.message}</p>
                    )}
                </form>
            </div>

            {isPending && <CodeforcesSkeleton />}

            {!isPending && state.data && state.data.length > 0 && (
                <div className="flex flex-col lg:flex-row gap-12 items-start animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <div className="lg:w-3/5 w-full bg-[#1C1C1C] border border-[#272C31] p-8 rounded-4xl shadow-xl sticky top-8">
                        <RatingGraph counts={counts} />
                    </div>
                    <div className="lg:w-2/5 w-full bg-[#1C1C1C] border border-[#272C31] p-8 rounded-4xl shadow-xl">
                        <RatingStats results={state.data} />
                    </div>
                </div>
            )}
        </main>
    );
}
