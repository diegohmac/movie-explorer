import { useState, Suspense } from 'react'
import { ThemeProvider } from 'styled-components'

import { defaultTheme } from '@/styles/theme'
import { GlobalStyle } from '@/styles/global'
import Movies from '@/components/Movies'
import Loading from '@/components/Movies/Loading'
import ErrorBoundary from '@/components/ErrorBoundary'
import Layout from '@/components/Layout'
import ActionsBox from '@/components/ActionsBox'
import { SortTypes } from '@/@types/movie'

function App() {
  const [query, setQuery] = useState('')
  const [sortBy, setSortBy] = useState<SortTypes>(null)

  const handleSort = (value: SortTypes) => {
    setSortBy((prevValue) => {
      if (prevValue === value) return null
      return value
    })
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Layout>
        <ActionsBox
          query={query}
          setQuery={setQuery}
          sortBy={sortBy}
          setSortBy={handleSort}
        />
        <ErrorBoundary>
          <Suspense fallback={<Loading />}>
            <Movies query={query} sortBy={sortBy} />
          </Suspense>
        </ErrorBoundary>
      </Layout>
    </ThemeProvider>
  )
}

export default App
