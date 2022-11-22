import type {NextPage} from 'next'
import React from 'react';
import SearchBar from '../components/SearchBar';
import {CommunityQueryData} from '../service/CommunityGetter';
import {Communities} from '../components/Communities';

const Home: NextPage = () => {
  const [query, setQuery] = React.useState<string>()
  const [page, setPage] = React.useState<number>(0)
  const [data, setData] = React.useState<CommunityQueryData>()
  const [error, setError] = React.useState<string>()

  const fetchData = React.useCallback(async (query: string) => {
    try {
      const response = await fetch(`/api/communities?${query}`)
      const data = await response.json()
      setData(data.communityData)
    } catch (e) {
      setError((e as Error).message)
    }
  }, [])

  const handleRequest = React.useCallback((value: string) => {
    setQuery(value)
    setPage(0)
    fetchData(`q=${value}`)
  }, [fetchData])

  const goToPage = React.useCallback((value: number) => {
    setPage(value)
    fetchData(`q=${query}&o=${value}`)
  }, [fetchData, query])

  return (
    <div >
      <h1 className="text-2xl font-bold text-center my-6" >Communities search</h1 >
      <SearchBar handleRequest={handleRequest} />
      {data && data.numberOfItems > 0 && <Communities data={data} goToPage={goToPage} currentPage={page} />}
      {error && <p className="" >Could not find communities {error}</p >}
      {data && data.numberOfItems === 0 &&
        <p className="m-5 w-4/5 mx-auto" >No communities found try different name</p >}
    </div >
  )
}

export default Home
