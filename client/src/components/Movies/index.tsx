import { useState, useCallback, useEffect, Fragment } from 'react'
import useMovies from '@/service/useMovies'
import { Container, SkeletonCard } from './styles'
import Movie from '@/components/Movies/Movie'
import useInfiniteScroll from '@/utils/useInfiniteScroll'
import { SortTypes } from '@/@types/movie'

type MoviesProp = {
  query?: string
  sortBy?: SortTypes
}

function Movies({ query, sortBy = null }: MoviesProp) {
  const [page, setPage] = useState(1)
  const { movies, totalPages, loading } = useMovies({ query, page, sortBy })

  const handleGetNextPage = useCallback(() => {
    if (page + 1 <= totalPages) {
      setPage((prevPage) => prevPage + 1)
    }
  }, [totalPages, page])

  const lastVisibleMovie = useInfiniteScroll({
    loading,
    hasNext: page !== totalPages,
    getNext: handleGetNextPage,
  })

  useEffect(() => {
    setPage(1)
  }, [query])

  return (
    <Container>
      {movies &&
        movies?.length > 0 &&
        movies.map((movie, index) => {
          if (index === movies.length - 1) {
            return (
              <Fragment key={movie.id}>
                <Movie {...movie} />
                {page !== totalPages && (
                  <div ref={lastVisibleMovie}>
                    <SkeletonCard />
                  </div>
                )}
              </Fragment>
            )
          }
          return <Movie key={movie.id} {...movie} />
        })}
    </Container>
  )
}

export default Movies
