import React, { useCallback, useMemo } from 'react'

import { useAppDispatch, useOpenedModal } from './store'
import { Modal } from './components/Modal'
import { ImageModalContent } from './components/ImageModalContent'
import { close } from './store/slices/modal'
import { IMAGE_MODAL_ID } from './constants/modals'
import { ScrollToTop } from './utils/components'

export const AppModals = () => {
  const dispatch = useAppDispatch()
  const modal = useOpenedModal()

  const closeModal = useCallback(() => dispatch(close()), [dispatch])

  const content = useMemo(() => {
    switch (modal) {
      case IMAGE_MODAL_ID:
        return <ImageModalContent />

      default:
        return null
    }
  }, [modal])

  if (!content) {
    return null
  }

  return (
    <div>
      <ScrollToTop />
      <Modal content={content} onCloseClick={closeModal} />
    </div>
  )
}
