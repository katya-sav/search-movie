import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import { SearchBar } from '../SearchBar'
import { Icon } from '../Icon'
import styles from './Header.module.css'

export const Header = () => {
  const navigate = useNavigate()

  const handleSearchSubmit = useCallback(
    (searchQuery: string) => {
      navigate(`search/${searchQuery}`)
    },
    [navigate],
  )

  return (
    <div className={styles.header}>
      <button
        type="button"
        className={styles.name}
        onClick={() => navigate('/', { replace: false })}
      >
        Name App
      </button>
      <SearchBar onSubmit={handleSearchSubmit} />
      <button className={styles.button} type="button">
        Sign in
        <Icon icon="signIn" size="lg" className={styles.icon} />
      </button>
    </div>
  )
}
