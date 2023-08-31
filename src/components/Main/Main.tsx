import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import image from '../../images/movieSearcher.png'
import { SearchBar } from '../SearchBar'

import styles from './Main.module.css'

export const Main = () => {
  const navigate = useNavigate()

  const handleSearchSubmit = useCallback(
    (searchQuery: string) => {
      navigate(`search/${searchQuery}`)
    },
    [navigate],
  )

  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Find Your Movie</h1>
      <SearchBar onSubmit={handleSearchSubmit} className={styles.input} />
      <img className={styles.image} src={image} alt="searcher" />
    </div>
  )
}
