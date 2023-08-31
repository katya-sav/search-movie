/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import { TInformation } from '../../../types'

import styles from './InformationLinkList.module.css'

type TInformationLinkListProps = {
  linkType: 'company' | 'genre'
  items: TInformation[]
}

export const InformationLinkList = ({
  linkType,
  items,
}: TInformationLinkListProps) => {
  const navigate = useNavigate()

  const renderInformationLinkList = useCallback(() => {
    if (!items.length) {
      return <span>No data available</span>
    }

    return items.map((item, i) => {
      const isLast = i === items.length - 1

      const handleNavigateCompany = () => {
        navigate(`/${linkType}/${item.id}`, { replace: false })
      }

      const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Enter') {
          e.preventDefault()

          handleNavigateCompany()
        }
      }

      return (
        <>
          <span
            // eslint-disable-next-line react/no-array-index-key
            key={i}
            role="button"
            className={styles.link}
            onClick={handleNavigateCompany}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            {item.name}
          </span>

          {!isLast && <span>, </span>}
        </>
      )
    })
  }, [navigate, items, linkType])

  return <div>{renderInformationLinkList()}</div>
}

/* <>
<Link
  className={styles.link}
  to={`/${linkName}/${item.id}`}
  key={item.id}
  onClick={handleNavigate}
>
  {item.name}
</Link>
{!isLast && <span>, </span>}
</> */
