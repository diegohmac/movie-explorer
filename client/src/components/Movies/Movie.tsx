import { MovieType } from '@/@types/movie'
import { MovieCard } from './styles'

import Typography from '@/components/UI/Typography'

const Movie = ({ title, description, coverImage, year }: MovieType) => {
  return (
    <MovieCard>
      <img src={coverImage} alt={title} />
      <Typography className="year">{year}</Typography>
      <section>
        <Typography variant="subtitle">{title}</Typography>
        <div className="extra">
          <Typography variant="body2">{description}</Typography>
        </div>
      </section>
    </MovieCard>
  )
}

export default Movie
