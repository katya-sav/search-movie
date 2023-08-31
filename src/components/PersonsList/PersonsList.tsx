import React, { useMemo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import cx from 'classnames'

import { Person } from '../Person/Person'
import { ButtonRight } from '../ButtonRight'
import { TPerson } from '../../types'

import styles from './PersonsList.module.css'

type TPersonsListProps = {
  movieId: string
  items: TPerson[]
  title?: string
  viewAll?: boolean
  className?: string
}

export const PersonsList = ({
  movieId,
  items,
  title,
  viewAll,
  className,
}: TPersonsListProps) => {
  const navigate = useNavigate()

  const persons = useMemo(
    () =>
      items?.map(item => (
        <Person
          personId={item.id}
          key={item.id}
          namePerson={item.name}
          image={item.image}
          description={item.description}
        />
      )),
    [items],
  )

  const navigateToCast = useCallback(() => {
    navigate(`/persons/${movieId}`, { replace: false })
  }, [movieId, navigate])

  if (!items.length) {
    return null
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>{title}</div>
      <div className={cx(styles.container, className)}>
        {persons}
        {viewAll && (
          <ButtonRight
            className={styles.button}
            onClick={navigateToCast}
            title="View all cast"
          />
        )}
      </div>
    </div>
  )
}
