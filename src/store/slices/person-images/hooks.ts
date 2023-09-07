import { useSelector } from 'react-redux'

import { RootState } from '../../store'
import { selectPersonImages } from './selectors'

export const usePersonImages = (personId: string | undefined) =>
  useSelector((state: RootState) => selectPersonImages(state, personId))

export const usePersonImagesLoading = () =>
  useSelector((state: RootState) => state.personImages.state === 'loading')
