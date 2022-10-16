import { notion } from "../../../utils/notion";

import type { NextApiRequest, NextApiResponse } from "next";
import type { ListBlockChildrenResponse } from "@notionhq/client/build/src/api-endpoints";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ListBlockChildrenResponse>
) {
  const block_id = req.query.block_id as string;

  const blocks = await notion.blocks.children.list({
    block_id,
    page_size: 5,
    start_cursor: req.query.start_cursor as string
  })

  res.status(200).json(blocks);
}
