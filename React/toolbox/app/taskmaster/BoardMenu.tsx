"use client";

import { addSticky } from "./action";

export default function BoardMenu({
    x,
    y,
    onClose,
}: {
    x: number;
    y: number;
    onClose: () => void;
}) {
    const handleCreate = async () => {
        const formData = new FormData();
        formData.append("title", "NEW INTEL");
        formData.append("content", "...");
        formData.append("x", x.toString());
        formData.append("y", y.toString());

        await addSticky(formData);
        onClose();
    };

    return (
        <div
            className="absolute z-50 bg-[#1C1C1C] border border-[#E6C07B] p-1 shadow-2xl"
            style={{ left: x, top: y }}
        >
            <button
                onClick={handleCreate}
                className="text-[10px] text-[#E6C07B] uppercase font-bold hover:bg-[#2A2A2A] px-4 py-2 block w-full text-left"
            >
                + Pin_Evidence
            </button>
        </div>
    );
}
