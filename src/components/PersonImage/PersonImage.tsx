import React from 'react'

import { SafeImage } from '../SafeImage'
import { TImage } from '../../types'

import styles from './PersonImage.module.css'

type TPersonImageProps = {
  personImage: TImage
}

export const PersonImage = ({ personImage }: TPersonImageProps) => (
  <SafeImage
    src={`https://api.moviesdb.ru/t/p/w342${personImage.path}`}
    className={styles.image}
    errorClassName={styles.imageError}
  />
)
