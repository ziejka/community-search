import React from 'react';
import {CommunityQueryData} from '../service/CommunityGetter';
import {CommunityComponent} from './Community';
import {Pagination} from './Pagination';

type PropsType = {
  data: CommunityQueryData
  goToPage: (page: number) => void
  currentPage: number
}

export const Communities: React.FC<PropsType> = ({data, goToPage, currentPage}) => {
  return (
    <div className="mt-8 w-4/5 mx-auto" >
      <p className="mb-2" >Found {data.numberOfItems} communities:</p >
      <div className="grid grid-cols-auto-fit-250 gap-3 mb-6" >
        {data.communities.map(community => <CommunityComponent key={community.Name} community={community} />)}
      </div >
      <Pagination numberOfRecords={data.numberOfItems} goToPage={goToPage} currentPage={currentPage} />
    </div >
  )
}