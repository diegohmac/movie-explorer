import useSWR from 'swr'
import { MovieType, SortTypes } from '@/@types/movie'

type UseMoviesProps = {
  query?: string
  page?: number
  limit?: number
  sortBy?: SortTypes
}

type FetcherProps = {
  url: string
  query?: string
}

async function fetcher({ url, query }: FetcherProps) {
  const search = `${query ? `?q=${query}` : ''}`
  const response = await fetch(`${url}${search}`)
  return response.json()
}

export default function useMovies({
  query,
  page = 1,
  limit = 12,
  sortBy,
}: UseMoviesProps = {}) {
  const { data, isLoading, error } = useSWR<MovieType[]>(
    ['http://localhost:8080/movies', query],
    ([url, query]: string[]) => fetcher({ url, query }),
    {
      suspense: true,
    },
  )

  const offset = limit * page
  const totalPages = data?.length ? Math.ceil(data.length / limit) : 1
  const paginatedData = data?.slice(0, offset)

  const sortedData = paginatedData?.sort((a, b) => {
    switch (sortBy) {
      case 'asc':
        return a.title > b.title ? 1 : -1
      case 'des':
        return a.title < b.title ? 1 : -1
      case 'new':
        return a.year - b.year
      case 'old':
        return b.year - a.year
      default:
        return 1
    }
  })

  return {
    movies: sortBy ? sortedData : paginatedData,
    totalPages,
    loading: isLoading,
    error,
  }
}
