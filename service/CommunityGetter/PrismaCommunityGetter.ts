import {CommunityQueryData, ICommunityGetter, ICommunityGetterOptions} from './ICommunityGetter';
import {PrismaClient} from '@prisma/client';

export class PrismaCommunityGetter implements ICommunityGetter {
  private prismaClient: PrismaClient

  constructor(prismaClient: PrismaClient) {
    this.prismaClient = prismaClient;
  }

  async GetForName({query, offset}: ICommunityGetterOptions = {query: '', offset: 0}): Promise<CommunityQueryData> {
    const numberOfItems = await this.prismaClient.community.count({
      where: {
        Name: {
          contains: query
        }
      }
    })
    const communities = await this.prismaClient.community.findMany({
      take: 10,
      skip: offset,
      select: {
        Name: true,
        MembersCount: true,
        AverageNewDailyPosts: true,
        Language: true
      },
      where: {
        Name: {
          contains: query
        }
      },
      orderBy: {
        Name: 'asc'
      }
    });

    return {
      communities,
      numberOfItems
    }
  }
}