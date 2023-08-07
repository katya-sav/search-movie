import { TImage } from '../../types'

export const mapPersonImages = (data: any): TImage[] =>
  data.profiles.map((image: any) => ({
    path: image.file_path,
  }))
