import React from 'react'

import styles from './SearchNotFound.module.css'

type TSearchNotFoundProps = {
  searchQuery?: string
}

export const SearchNotFound = ({ searchQuery }: TSearchNotFoundProps) => (
  <div className={styles.text}>
    No results for &quot;{searchQuery}&quot;. Please try again
  </div>
)
