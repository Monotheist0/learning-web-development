"use client";

import { useState, useTransition } from "react";
import { motion } from "framer-motion";
import { Pin } from "lucide-react";
import { deleteSticky, moveSticky, updateSticky, toggleSticky } from "./action";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function StickyCard({ sticky }: { sticky: any }) {
    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState(sticky.title);
    const [content, setContent] = useState(sticky.content);

    const [isPending, startTransition] = useTransition();

    const handleSave = () => {
        startTransition(async () => {
            await updateSticky(sticky.id, title, content);
            setIsEditing(false);
        });
    };

    return (
        <motion.div
            drag={!isEditing}
            dragMomentum={false}
            onDragEnd={(e, info) => {
                moveSticky(sticky.id, Math.round(info.point.x), Math.round(info.point.y));
            }}
            initial={{ x: sticky.x, y: sticky.y }}
            className={`absolute p-5 w-72 bg-[#1C1C1C] border border-[#2A2A2A] shadow-xl subpixel-antialiased
                ${sticky.isDone ? "opacity-40 grayscale" : "opacity-100"}
            `}
        >
            {/* The Push Pin */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-[#D5805E]">
                <Pin size={24} className="fill-[#D5805E] shadow-2xl drop-shadow-lg" />
            </div>

            <div className="flex justify-between items-center mb-2 mt-2 border-b border-[#2A2A2A] pb-2">
                <button
                    onClick={() => toggleSticky(sticky.id, !!sticky.isDone)}
                    className="text-[10px] font-mono text-[#7A6A55] hover:text-[#E6C07B]"
                >
                    {sticky.isDone ? "[REOPEN]" : "[RESOLVE]"}
                </button>
                {!isEditing && (
                    <button
                        onClick={() => deleteSticky(sticky.id)}
                        className="text-[#D5805E] text-sm hover:scale-125 transition-transform"
                    >
                        ×
                    </button>
                )}
            </div>

            {isEditing ? (
                <div className="flex flex-col gap-3 font-elite">
                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="bg-[#0D0D0D] border border-[#2A2A2A] text-[#E6C07B] font-bold text-sm p-2 outline-none focus:border-[#E6C07B] font-elite"
                        autoFocus
                    />
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="bg-[#0D0D0D] border border-[#2A2A2A] text-[#B9986F] text-xs p-2 h-24 outline-none focus:border-[#E6C07B] resize-y font-elite"
                    />
                    <button
                        onClick={handleSave}
                        disabled={isPending}
                        className="bg-[#E6C07B] text-[#0D0D0D] text-xs font-bold py-2 uppercase disabled:opacity-50"
                    >
                        {isPending ? "TRANSMITTING..." : "Save_Intel"}
                    </button>
                </div>
            ) : (
                <div onDoubleClick={() => setIsEditing(true)}>
                    <h3
                        className={`text-[#E6C07B] font-bold text-lg uppercase italic font-elite ${sticky.isDone ? "line-through" : ""}`}
                    >
                        {sticky.title}
                    </h3>
                    <p className="text-[#B9986F] text-sm leading-relaxed mt-3 whitespace-pre-wrap font-elite">
                        {sticky.content}
                    </p>
                    <p className="text-xs text-[#7A6A55] mt-5 uppercase border-t border-[#2A2A2A] pt-2">
                        Double-Click to Edit
                    </p>
                </div>
            )}
        </motion.div>
    );
}
