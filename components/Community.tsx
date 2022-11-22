import React from 'react';
import {Community} from '@prisma/client';

type PropsType = {
  community: Community
}

const CommunityComponentRow = ({label, value}: { label: string, value: string | number }) => (
  <div className="mb-2 last:mb-0" >
    <p className="text-xs" >{label}: </p >
    <p className="font-bold" > {value}</p >
  </div >
)

export const CommunityComponent: React.FC<PropsType> = ({community}) => (
  <section className="p-3 border-2 rounded-lg border-sky-200" >
    <CommunityComponentRow value={community.Name} label="Name" />
    <CommunityComponentRow value={community.Language} label="Language" />
    <CommunityComponentRow value={community.MembersCount} label="Members" />
    <CommunityComponentRow value={community.AverageNewDailyPosts} label="Avg. New Post Daily" />
  </section >
)
