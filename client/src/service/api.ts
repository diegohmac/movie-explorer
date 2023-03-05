type FetcherProps = {
  url: string
  query?: string
}

export default async function fetcher({ url, query }: FetcherProps) {
  const search = `${query ? `?q=${query}` : ''}`
  const response = await fetch(`${url}${search}`)
  return response.json()
}
