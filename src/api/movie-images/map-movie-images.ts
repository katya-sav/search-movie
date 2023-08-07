import { TMovieImages } from './types'

export const mapMovieImages = (data: any): TMovieImages => {
  const backdrops = data.backdrops.map((backdrop: any) => ({
    path: backdrop.file_path,
  }))

  const posters = data.posters.map((poster: any) => ({
    path: poster.file_path,
  }))

  return { backdrops, posters }
}
