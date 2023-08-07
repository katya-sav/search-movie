import { TRecommendation } from '../../types'

export const mapMovieRecommendations = (data: any): TRecommendation[] =>
  data.results.map((recommendation: any) => ({
    id: recommendation.id,
    title: recommendation.title,
    poster: recommendation.poster_path,
    rating: recommendation.vote_average,
  }))
