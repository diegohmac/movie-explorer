export type MovieType = {
  id: string
  title: string
  director: string
  description: string
  year: number
  coverImage: string
}

export type SortTypes = 'asc' | 'des' | 'new' | 'old' | null
