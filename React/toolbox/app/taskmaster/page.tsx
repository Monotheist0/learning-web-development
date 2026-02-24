import { db } from "@/db";
import { stickies } from "@/db/schema";
import StickyBoard from "./StickyBoard";

export default async function TaskMasterPage() {
    const allStickies = await db.select().from(stickies);

    return (
        <main className="min-h-screen bg-[#0D0D0D] p-8 md:p-16">
            <h1 className="text-4xl font-bold text-[#E6C07B] uppercase tracking-tighter">
                Evidence_Board
            </h1>
            <p className="text-[#7A6A55] font-mono text-xs mt-2 border-l-2 border-[#D5805E] pl-4">
                [SYSTEM]: {allStickies.length} entries recovered from database_sector_01
            </p>

            <div className="mt-8">
                <StickyBoard initialStickies={allStickies} />
            </div>
        </main>
    );
}
