"use server";

import { db } from "@/db";
import { stickies } from "@/db/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function addSticky(formData: FormData) {
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    const x = parseInt(formData.get("x") as string) || 0;
    const y = parseInt(formData.get("y") as string) || 0;

    if (!title || !content) return;

    await db.insert(stickies).values({
        title,
        content,
        x,
        y,
        color: "#1c1c1c",
    });

    revalidatePath("/taskmaster");
}

export async function deleteSticky(id: number) {
    await db.delete(stickies).where(eq(stickies.id, id));
    revalidatePath("/taskmaster");
}

export async function updateSticky(id: number, title: string, content: string) {
    await db.update(stickies).set({ title, content }).where(eq(stickies.id, id));
    revalidatePath("/taskmaster");
}

export async function toggleSticky(id: number, currentDoneState: boolean) {
    await db.update(stickies).set({ isDone: !currentDoneState }).where(eq(stickies.id, id));
    revalidatePath("/taskmaster");
}

export async function moveSticky(id: number, x: number, y: number) {
    await db.update(stickies).set({ x, y }).where(eq(stickies.id, id));
    revalidatePath("/taskmaster");
}
