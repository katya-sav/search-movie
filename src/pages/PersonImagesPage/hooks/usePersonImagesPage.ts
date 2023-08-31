import { useEffect } from 'react'

import { fetchPersonImages } from '../../../store/slices/person-images'
import {
  useAppDispatch,
  usePersonImages,
  usePersonImagesLoading,
} from '../../../store'

export const usePersonImagesPage = (personId: string | undefined) => {
  const dispatch = useAppDispatch()

  const images = usePersonImages(personId)
  const loading = usePersonImagesLoading()

  useEffect(() => {
    if (personId) {
      dispatch(fetchPersonImages(personId))
    }
  }, [personId, dispatch])

  return { loading, images }
}
