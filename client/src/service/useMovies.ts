import useSWR from 'swr'
import fetcher from '@/service/api'

type Movie = {
  id: string
  title: string
  director: string
  description: string
  year: number
  coverImage: string
}

type Props = {
  query?: string
  page?: number
  limit?: number
}

export default function useMovies({ query, page = 1, limit = 10 }: Props = {}) {
  const { data } = useSWR<Movie[]>(
    ['http://localhost:8080/movies', query],
    ([url, query]: string[]) => fetcher({ url, query }),
    {
      suspense: true,
    },
  )

  const offset = limit * page
  const totalPages = data?.length ? Math.ceil(data.length / limit) : 1
  const paginatedData = data?.slice(offset - limit, offset)

  return {
    movies: paginatedData,
    totalPages,
  }
}
