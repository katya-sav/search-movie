import { useSelector } from 'react-redux'

import { getListSafe } from '../../../utils'
import { RootState } from '../../store'

export const usePersonImages = (personId: string | undefined) =>
  useSelector((state: RootState) =>
    getListSafe(state.personImages.personImages, personId),
  )

export const usePersonImagesLoading = () =>
  useSelector((state: RootState) => state.personImages.state === 'loading')
