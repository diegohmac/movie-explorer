import { describe, it, expect } from 'vitest'
import Movie from '@/components/Movies/Movie'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { ThemeProvider } from 'styled-components'

import { defaultTheme } from '@/styles/theme'

const movieMockData = {
  id: 'movie-1',
  title: 'Nam placeat totam',
  director: 'Marianne Cassin II',
  description:
    'Possimus nisi totam illum voluptatem sunt eum deleniti molestiae. Fugit enim aut velit qui officiis laborum. Aliquid aut quia totam fugit saepe maxime et. In praesentium sunt quasi. Quia omnis vel inventore et earum.',
  year: 2020,
  coverImage: 'http://placeimg.com/640/480/business',
}

describe('<Movie />', () => {
  it('should render MovieCard correctly', () => {
    const { getByText } = render(
      <ThemeProvider theme={defaultTheme}>
        <Movie {...movieMockData} />
      </ThemeProvider>,
    )

    expect(getByText(movieMockData.title)).toBeInTheDocument()
  })
})
