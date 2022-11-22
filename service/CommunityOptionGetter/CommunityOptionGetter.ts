import {ICommunityOptionGetter, QueryParams} from './ICommunityOptionGetter';
import {ICommunityGetterOptions} from '../CommunityGetter/ICommunityGetter';

export class CommunityOptionGetter implements ICommunityOptionGetter {

  GetQueryOptions(query: QueryParams): ICommunityGetterOptions {
    return {
      query: this.getQ(query),
      offset: this.getOffset(query)
    }
  }

  IsValid(query: QueryParams): boolean {
    return (!query.q || this.isQValid(query)) && (!query.o || this.isOffsetValid(query))
  }

  private isOffsetValid(query: QueryParams): boolean {
    if (typeof query.o !== 'string') {
      return false
    }
    return /\d+/.test(query.o)
  }

  private isQValid(query: QueryParams): boolean {
    return typeof query.q === 'string'
  }


  private getQ(query: QueryParams): string {
    return this.isQValid(query) ? <string>query.q : ''
  }

  private getOffset(query: QueryParams): number {
    if (!query.o || !this.isOffsetValid(query)) {
      return 0
    }

    return parseInt(<string>query.o)
  }
}