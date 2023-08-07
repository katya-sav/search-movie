import { TVideo } from '../../types'

export const mapMovieVideos = (data: any): TVideo[] =>
  data.results.map((video: any) => ({
    id: video.id,
    path: video.key,
  }))
