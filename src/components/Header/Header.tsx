import React, { useCallback } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

import { SearchBar } from '../SearchBar'
import { MovieDropdown } from './MovieDropdown'

import styles from './Header.module.css'

export const Header = () => {
  const { pathname } = useLocation()
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
        Search Movie
      </button>
      {pathname !== '/' ? <SearchBar onSubmit={handleSearchSubmit} /> : null}
      <MovieDropdown />
    </div>
  )
}
