import { useCallback, useRef } from 'react'

type UseInfiniteScrollProps = {
  loading: boolean
  hasNext: boolean
  getNext: () => void
}

export default function useInfiniteScroll({
  loading,
  hasNext,
  getNext,
}: UseInfiniteScrollProps) {
  const observer = useRef<IntersectionObserver>()
  const lastVisibleElement = useCallback(
    (node: HTMLDivElement) => {
      if (loading) return null
      if (observer.current) observer.current.disconnect()

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          if (hasNext) getNext()
        }
      })

      if (node) observer.current.observe(node)
    },
    [getNext, hasNext, loading],
  )

  return lastVisibleElement
}
