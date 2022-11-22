import {ICommunityGetterOptions} from '../CommunityGetter/ICommunityGetter';

export type QueryParams = Partial<Record<string, string | string[]>>
export interface ICommunityOptionGetter {
  GetQueryOptions(query: QueryParams): ICommunityGetterOptions
  IsValid(query: QueryParams): boolean
}