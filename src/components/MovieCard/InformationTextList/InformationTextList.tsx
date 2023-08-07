import React, { useCallback } from 'react'

import { TInformation } from '../../../types'

type TInformationTextListProps = {
  items: TInformation[]
}

export const InformationTextList = ({ items }: TInformationTextListProps) => {
  const renderInformationTextList = useCallback(() => {
    if (!items.length) {
      return <span>No data available</span>
    }

    return items.map((item, i) => {
      const isLast = i === items.length - 1
      return (
        <React.Fragment key={item.name}>
          {item.name}
          {!isLast && <span>, </span>}
        </React.Fragment>
      )
    })
  }, [items])

  return <div>{renderInformationTextList()}</div>
}
