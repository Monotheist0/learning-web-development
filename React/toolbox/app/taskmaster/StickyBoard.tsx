"use client";

import { useState } from "react";
import BoardMenu from "./BoardMenu";
import StickyCard from "./StickyCard";

interface Sticky {
    id: number;
    title: string;
    content: string;
    x: number;
    y: number;
    color: string;
    isDone: boolean | null;
}

export default function StickyBoard({ initialStickies }: { initialStickies: Sticky[] }) {
    const [menuPos, setMenuPos] = useState<{ x: number; y: number } | null>(null);

    const handleContextMenu = (e: React.MouseEvent) => {
        e.preventDefault();
        setMenuPos({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
    };

    return (
        <div
            onContextMenu={handleContextMenu}
            onClick={() => setMenuPos(null)}
            className="relative w-full h-[80vh] bg-[#0d0d0d] border-2 border-[#1C1C1C] overflow-hidden rounded-sm"
            style={{
                backgroundImage: "radial-gradient(#1C1C1C 1px, transparent 1px)",
                backgroundSize: "30px 30px",
            }}
        >
            {menuPos && <BoardMenu x={menuPos.x} y={menuPos.y} onClose={() => setMenuPos(null)} />}

            {initialStickies.map((sticky) => (
                <StickyCard key={sticky.id} sticky={sticky} />
            ))}
        </div>
    );
}
