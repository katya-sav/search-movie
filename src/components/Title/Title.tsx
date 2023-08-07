import React from 'react'

import image from '../../images/search-image.png'
import styles from './Title.module.css'

export const Title = () => (
  <div className={styles.title}>
    <h1 className={styles.text}>Find Your Movie</h1>
    <img className={styles.image} src={image} alt="book" />
  </div>
)
