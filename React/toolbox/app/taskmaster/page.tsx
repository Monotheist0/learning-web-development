import { db } from "@/db";
import { stickies } from "@/db/schema";
import StickyBoard from "./StickyBoard";
import Link from "next/link";

export default async function TaskMasterPage() {
    const allStickies = await db.select().from(stickies);

    return (
        <main className="min-h-screen bg-[#0D0D0D] p-8 md:p-16">
            <div className="flex justify-between items-start">
                <div>
                    <h1 className="text-4xl font-bold text-[#E6C07B] uppercase tracking-tighter">
                        Evidence_Board
                    </h1>
                    <p className="text-[#7A6A55] font-mono text-xs mt-2 border-l-2 border-[#D5805E] pl-4">
                        [SYSTEM]: {allStickies.length} entries recovered from database_sector_01
                    </p>
                </div>
                <Link
                    href="/"
                    className="text-[#E6C07B] font-mono text-xs border border-[#2A2A2A] px-4 py-2 hover:bg-[#E6C07B] hover:text-[#0D0D0D] transition-all uppercase tracking-widest"
                >
                    [RETURN_TO_BASE]
                </Link>
            </div>

            <div className="mt-8">
                <StickyBoard initialStickies={allStickies} />
            </div>
        </main>
    );
}
