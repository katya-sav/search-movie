import { PayloadAction } from '@reduxjs/toolkit'

export type TModalSlice = {
  id: string | null
  meta: TModalMeta | null
}

export type TModalMeta = TImageModalMeta | TPosterMeta

export type TImageModalMeta = {
  metaType: 'image'
  imagePath: string
}

export type TPosterMeta = {
  metaType: 'poster'
  person: string
}

export type TOpenModalAction = PayloadAction<{
  id: string
  meta?: TModalMeta
}>
