import {Community} from '@prisma/client'


export type CommunityQueryData = {
  // model is generated and synchronised with the Prisma data
  // hence I left this braking clean code dependency
  communities: Community[],
  numberOfItems: number
}

export type ICommunityGetterOptions = {
  query?: string,
  offset?: number
}

export interface ICommunityGetter {
  GetForName(options?: ICommunityGetterOptions): Promise<CommunityQueryData>
}

