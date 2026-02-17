/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { z } from "zod";

export type ActionsState = {
    errors?: { handle?: string[] };
    message?: string | null;
    data?: any[];
};

const HandleSchema = z.object({
    handle: z.string().min(3, "Too short!").max(24, "Too long!"),
});

export async function fetchUserSolvedProblems(handle: string) {
    const url = `https://codeforces.com/api/user.status?handle=${handle}`;
    const response = await fetch(url);
    const data = await response.json();

    if (data.status !== "OK") {
        throw new Error("Target not found on Codeforces.");
    }

    const solvedMap = new Map();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data.result.forEach((submission: any) => {
        if (submission.verdict === "OK") {
            const problemId = `${submission.problem.contestId}-${submission.problem.index}`;
            if (!solvedMap.has(problemId)) {
                solvedMap.set(problemId, submission);
            }
        }
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return Array.from(solvedMap.values());
}

export async function analyzeHandle(
    prevState: ActionsState,
    formData: FormData,
): Promise<ActionsState> {
    const validatedFields = HandleSchema.safeParse({
        handle: formData.get("handle"),
    });
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: "Target Identification Falied. Correct the input.",
        };
    }
    const { handle } = validatedFields.data;
    try {
        const data = await fetchUserSolvedProblems(handle);
        return { data, message: "Identification Successful" };
    } catch (error) {
        return { message: "User not found on Codeforces.", data: [] };
    }
}
