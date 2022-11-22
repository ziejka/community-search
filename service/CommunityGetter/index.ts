import prismaClient from '../../lib/prisma'
import {PrismaCommunityGetter} from './PrismaCommunityGetter';

export const prismaCommunityGetter = new PrismaCommunityGetter(prismaClient)

export type {CommunityQueryData} from './ICommunityGetter'