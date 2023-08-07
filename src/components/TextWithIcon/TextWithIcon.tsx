import React, { useMemo } from 'react'

import { Icon } from '../Icon'
import { TIconType, TIconSize } from '../../types'
import styles from './TextWithIcon.module.css'

type TTextWithIcon = {
  text: string
  secondaryText?: string
  size: TIconSize
  icon: TIconType
}

export const TextWithIcon = ({
  icon,
  size,
  text,
  secondaryText,
}: TTextWithIcon) => {
  const iconStyle = useMemo(() => {
    switch (icon) {
      case 'star':
        return styles.star

      default:
        return styles.icon
    }
  }, [icon])

  return (
    <div className={styles.ratingIcon}>
      <Icon className={iconStyle} icon={icon} size={size} />
      <div className={styles.rating}>{text}</div>
      <div>{secondaryText}</div>
    </div>
  )
}
