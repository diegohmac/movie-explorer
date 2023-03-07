import { SkeletonCard, Container } from './styles'

const Skeleton = () => {
  return (
    <Container>
      {new Array(9).fill(null).map((_, i) => {
        return <SkeletonCard key={i} />
      })}
    </Container>
  )
}

export default Skeleton
