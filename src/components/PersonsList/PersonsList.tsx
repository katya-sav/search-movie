import React, { useMemo } from 'react'

import { Person } from '../Person/Person'
import { TPerson } from '../../types'
import styles from './PersonsList.module.css'

type TPersonsListProps = {
  items: TPerson[]
  title: string
}

export const PersonsList = ({ items, title }: TPersonsListProps) => {
  const persons = useMemo(
    () =>
      items.map(item => (
        <Person
          key={item.id}
          namePerson={item.name}
          image={item.image}
          description={item.description}
        />
      )),
    [items],
  )

  if (!items.length) {
    return null
  }

  return (
    <div>
      <div className={styles.title}>{title}</div>
      <div className={styles.container}>{persons}</div>
    </div>
  )
}
