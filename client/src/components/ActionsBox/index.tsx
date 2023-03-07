import { useRef } from 'react'
import { MdSearch, MdClose } from 'react-icons/md'
import { TbSortAZ, TbSortZA, TbSort09, TbSort90 } from 'react-icons/tb'
import { SortTypes } from '@/@types/movie'
import Typography from '@/components/UI/Typography'

import { Container, SortContainer, QuerySubtitle } from './styles'

type Props = {
  query: string
  setQuery: (value: string) => void
  sortBy: SortTypes
  setSortBy: (value: SortTypes) => void
}

const ActionsBox = ({ query, setQuery, sortBy, setSortBy }: Props) => {
  const inputRef = useRef<HTMLInputElement | null>(null)

  const handleSearch = () => {
    if (inputRef.current) {
      setQuery(inputRef.current.value)
      inputRef.current.value = ''
    }
  }

  return (
    <>
      <Container>
        <SortContainer>
          <Typography variant="button" color="primary">
            Sort by:
          </Typography>
          <TbSort09
            size={40}
            onClick={() => setSortBy('new')}
            className={sortBy === 'new' ? 'active' : ''}
            title="Newest"
          />
          <TbSort90
            size={40}
            onClick={() => setSortBy('old')}
            className={sortBy === 'old' ? 'active' : ''}
            title="Oldest"
          />
          <TbSortAZ
            size={40}
            onClick={() => setSortBy('asc')}
            className={sortBy === 'asc' ? 'active' : ''}
            title="Ascending"
          />
          <TbSortZA
            size={40}
            onClick={() => setSortBy('des')}
            className={sortBy === 'des' ? 'active' : ''}
            title="Descending"
          />
        </SortContainer>
        <div className="searchBox">
          <input ref={inputRef} placeholder="Search movies..." />
          <button onClick={handleSearch}>
            <MdSearch size={40} />
          </button>
        </div>
      </Container>
      {query && (
        <QuerySubtitle>
          <Typography color="primary" variant="subtitle">
            {`Results for "${query}"`}
          </Typography>
          <MdClose size="24" onClick={() => setQuery('')} />
        </QuerySubtitle>
      )}
    </>
  )
}

export default ActionsBox
