import {PrismaCommunityGetter} from './PrismaCommunityGetter';
import {Community, PrismaClient} from '@prisma/client';
import {mockDeep, mockReset} from 'jest-mock-extended';
import {CommunityQueryData} from './ICommunityGetter';

describe('PrismaCommunityGetter', () => {
  const prismaMock = mockDeep<PrismaClient>()
  const communities: Community[] = [{
    Name: 'test',
    AverageNewDailyPosts: 1,
    MembersCount: 2,
    Language: 'en',
  }]

  beforeEach(() => {
    mockReset(prismaMock)
  })

  it('should return result of query, without parameters', () => {
    prismaMock.community.count.mockResolvedValue(100)
    prismaMock.community.findMany.mockResolvedValue(communities)

    const expected: CommunityQueryData = {
      numberOfItems: 100,
      communities
    }

    const prismaCommunityGetter = new PrismaCommunityGetter(prismaMock)
    expect(prismaCommunityGetter.GetForName()).resolves.toEqual(expected)
  })

  it('should return result of query, with query parameters', () => {
    prismaMock.community.count.mockResolvedValue(100)
    prismaMock.community.findMany.mockResolvedValue(communities)

    const expected: CommunityQueryData = {
      numberOfItems: 100,
      communities
    }

    const prismaCommunityGetter = new PrismaCommunityGetter(prismaMock)
    expect(prismaCommunityGetter.GetForName({query: 'test'})).resolves.toEqual(expected)
  })

  it('should return result of query, with query parameters and offset', () => {
    prismaMock.community.count.mockResolvedValue(100)
    prismaMock.community.findMany.mockResolvedValue(communities)

    const expected: CommunityQueryData = {
      numberOfItems: 100,
      communities
    }

    const prismaCommunityGetter = new PrismaCommunityGetter(prismaMock)
    expect(prismaCommunityGetter.GetForName({offset: 10, query: 'test'})).resolves.toEqual(expected)
  })

  it('should return result of query, with offset', () => {
    prismaMock.community.count.mockResolvedValue(100)
    prismaMock.community.findMany.mockResolvedValue(communities)

    const expected: CommunityQueryData = {
      numberOfItems: 100,
      communities
    }

    const prismaCommunityGetter = new PrismaCommunityGetter(prismaMock)
    expect(prismaCommunityGetter.GetForName({offset: 10})).resolves.toEqual(expected)
  })

  it('should return error form db', () => {
    prismaMock.community.count.mockResolvedValue(100)
    prismaMock.community.findMany.mockRejectedValue(new Error('Db error'))

    const prismaCommunityGetter = new PrismaCommunityGetter(prismaMock)
    expect(prismaCommunityGetter.GetForName()).rejects.toEqual(new Error('Db error'))
  })
})

