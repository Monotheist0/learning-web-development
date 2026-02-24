import { pgTable, serial, text, integer, boolean } from "drizzle-orm/pg-core";

export const stickies = pgTable("stickies_table", {
    id: serial("id").primaryKey(),
    title: text("title").notNull(),
    content: text("content").notNull(),
    x: integer("x").notNull(),
    y: integer("y").notNull(),
    color: text("color").notNull(),
    isDone: boolean("isDone").default(false),
});
