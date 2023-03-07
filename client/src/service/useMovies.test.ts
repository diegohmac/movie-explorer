import { describe, it, expect, vi } from 'vitest'
import '@testing-library/jest-dom'

import useMovies, { sortMovies } from '@/service/useMovies'

const moviesMockData = [
  {
    id: 'movie-21',
    title: 'Repellat id repellendus',
    director: 'Aubrey Schaefer',
    description:
      'Natus et voluptatem rerum eveniet natus nulla eius ut. Labore aut earum hic saepe. A quidem aperiam. Dolor officiis dignissimos voluptas fuga qui et consequatur placeat tempora.',
    year: 2019,
    coverImage: 'http://placeimg.com/640/480/business',
  },
  {
    id: 'movie-8',
    title: 'Reprehenderit similique dicta',
    director: 'Constance Yundt',
    description:
      'Nihil iusto ab voluptas eius quia nisi iure voluptas. Omnis qui minima. Tempora nostrum hic et harum perferendis aliquam quod corporis. Odit inventore magni.',
    year: 2018,
    coverImage: 'http://placeimg.com/640/480/business',
  },
  {
    id: 'movie-224',
    title: 'Nemo praesentium maiores',
    director: 'Mrs. Johanna Ullrich',
    description:
      'Debitis eius quos ducimus culpa minus dolor sit. Quam et ipsam autem quo distinctio quis. Maiores recusandae distinctio ea et explicabo eos nihil id minus. Aut ea perspiciatis. Sit saepe debitis placeat quam laborum sint hic sed.',
    year: 2017,
    coverImage: 'http://placeimg.com/640/480/business',
  },
]

const [moviesMockDataQueried] = moviesMockData

type MockUseSwrProps = [url?: string, query?: string]

describe('useMovies()', () => {
  vi.mock('swr', () => {
    return {
      default: (props: MockUseSwrProps) => {
        const [, query] = props
        if (query) {
          return {
            data: [moviesMockDataQueried],
            isLoading: false,
            error: null,
          }
        }
        return {
          data: moviesMockData,
          isLoading: false,
          error: null,
        }
      },
    }
  })

  it('should retrieve fetched movies', () => {
    const { movies } = useMovies()

    expect(movies).toMatchObject(moviesMockData)
  })

  it('should retrieve movies based on the query', () => {
    const query = 'Repellat id repellendus'
    const { movies } = useMovies({ query })
    expect(movies).toHaveLength(1)
    expect(movies?.[0].title).toMatch(query)
  })

  it('should retrieve movies sorted by newest', () => {
    const { movies } = useMovies({ sortBy: 'new' })

    const sortedMockedData = moviesMockData
      .slice()
      .sort((a, b) => sortMovies(a, b, 'new'))

    expect(sortedMockedData).toStrictEqual(movies)
  })

  it('should retrieve movies sorted by oldest', () => {
    const { movies } = useMovies({ sortBy: 'old' })

    const sortedMockedData = moviesMockData
      .slice()
      .sort((a, b) => sortMovies(a, b, 'old'))

    expect(sortedMockedData).toStrictEqual(movies)
  })

  it('should retrieve movies sorted by A-Z', () => {
    const { movies } = useMovies({ sortBy: 'asc' })

    const sortedMockedData = moviesMockData
      .slice()
      .sort((a, b) => sortMovies(a, b, 'asc'))

    expect(sortedMockedData).toStrictEqual(movies)
  })

  it('should retrieve movies sorted by Z-A', () => {
    const { movies } = useMovies({ sortBy: 'des' })

    const sortedMockedData = moviesMockData
      .slice()
      .sort((a, b) => sortMovies(a, b, 'des'))

    expect(sortedMockedData).toStrictEqual(movies)
  })
})
