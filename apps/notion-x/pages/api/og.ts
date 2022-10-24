import type { NextApiRequest, NextApiResponse } from 'next';
import {opengraph} from '@kairoverse/opengraph'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const url = req.query.url as string;
  const data = await opengraph(url)

  res.status(200).json(data);
}
