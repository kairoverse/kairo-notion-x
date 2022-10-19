import { notion } from '../../../utils/notion';

import type { NextApiRequest, NextApiResponse } from 'next';
import type { UserObjectResponse } from '@notionhq/client/build/src/api-endpoints';

export default async function handler(req: NextApiRequest, res: NextApiResponse<UserObjectResponse>) {
  const user_id = req.query.user_id as string;

  const user = await notion.users.retrieve({ user_id });
  res.status(200).json(user);
}
