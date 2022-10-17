import { Client } from "@notionhq/client";

export const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const database_id = process.env.NOTION_DATABASE;
export { serialize, deserialize } from "superjson";
