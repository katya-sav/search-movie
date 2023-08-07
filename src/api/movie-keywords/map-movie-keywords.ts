import { TKeyword } from '../../types'

export const mapMovieKeywords = (data: any): TKeyword[] =>
  data.keywords.map((keyword: any) => ({
    id: keyword.id,
    key: keyword.name,
  }))
