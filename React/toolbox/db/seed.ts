import { db } from "./index";
import { stickies } from "./schema";

async function main() {
    console.log("🕵️ Seeding the evidence board...");

    await db.insert(stickies).values({
        title: "FIRST CLUE",
        content: "We need to investigate the docks.",
        x: 100,
        y: 100,
        color: "#1C1C1C",
    });

    console.log("Evidence added!");
}
main();
