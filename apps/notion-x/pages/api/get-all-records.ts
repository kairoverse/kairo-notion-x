import { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints';
import { database_id, notion } from '../../utils/notion';

import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse<QueryDatabaseResponse>) {
  const records = await notion.databases.query({
    database_id,
    filter: {
      property: 'status',
      status: {
        equals: 'Published',
      },
    },
  });

  res.status(200).json(records);
}
