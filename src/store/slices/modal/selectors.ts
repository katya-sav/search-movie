import { useSelector } from 'react-redux'

import { RootState } from '../../store'

export const useOpenedModal = () =>
  useSelector((state: RootState) => state.modal.id)

export const useModalMeta = () =>
  useSelector((state: RootState) => state.modal.meta)
