import React from 'react'
import cx from 'classnames'

import { Icon } from '../Icon'
import styles from './ButtonRight.module.css'

type TButtonRightProps = {
  title: string
  onClick: () => void
  className?: string
}

export const ButtonRight = ({
  title,
  className,
  onClick,
}: TButtonRightProps) => (
  <button
    onClick={onClick}
    className={cx(styles.button, className)}
    type="button"
  >
    {title}
    <Icon icon="arrowRight" size="lg" className={styles.icon} />
  </button>
)
