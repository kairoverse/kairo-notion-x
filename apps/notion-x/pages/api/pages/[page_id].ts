import { notion } from '../../../utils/notion';

import type { NextApiRequest, NextApiResponse } from 'next';
import type { GetPageResponse } from '@notionhq/client/build/src/api-endpoints';

export default async function handler(req: NextApiRequest, res: NextApiResponse<GetPageResponse>) {
  const page_id = req.query.page_id as string;

  const page = await notion.pages.retrieve({ page_id });
  res.status(200).json(page);
}
