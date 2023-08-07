import React, { useCallback } from 'react'
import { Link } from 'react-router-dom'
import { TInformation } from '../../../types'

import styles from './InformationLinkList.module.css'

type TInformationLinkListProps = {
  items: TInformation[]
  linkName?: string
}

export const InformationLinkList = ({
  items,
  linkName,
}: TInformationLinkListProps) => {
  const renderInformationLinkList = useCallback(() => {
    if (!items.length) {
      return <span>No data available</span>
    }

    return items.map((item, i) => {
      const isLast = i === items.length - 1

      return (
        <>
          <Link
            className={styles.link}
            to={`/${linkName}/${item.id}`}
            key={item.id}
            onClick={e => e.stopPropagation()}
          >
            {item.name}
          </Link>
          {!isLast && <span>, </span>}
        </>
      )
    })
  }, [items, linkName])

  return <div>{renderInformationLinkList()}</div>
}
