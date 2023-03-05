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
}

export default function useMovies({ query }: Props = {}) {
  const { data } = useSWR<Movie[]>(
    ['http://localhost:8080/movies', query],
    ([url, query]: string[]) => fetcher({ url, query }),
    {
      suspense: true,
    },
  )

  return data
}
