// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'
import {prismaCommunityGetter} from '../../service/CommunityGetter';
import {CommunityQueryData, ICommunityGetter} from '../../service/CommunityGetter/ICommunityGetter';
import {ICommunityOptionGetter} from '../../service/CommunityOptionGetter/ICommunityOptionGetter';
import {communityOptionGetter} from '../../service/CommunityOptionGetter';

type Data = {
  communityData: CommunityQueryData
} | {
  error: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
  communityGetter: ICommunityGetter = prismaCommunityGetter,
  queryGetter: ICommunityOptionGetter = communityOptionGetter
) {
  if (!queryGetter.IsValid(req.query)) {
    res.status(406).json({error: 'Invalid query parameters'})
  }
  try {
    const options = queryGetter.GetQueryOptions(req.query)
    const communityData = await communityGetter.GetForName(options)
    res.status(200).json({communityData})
  } catch (e) {
    res.status(404).json({error: 'We could not get communities'})
  }
}
