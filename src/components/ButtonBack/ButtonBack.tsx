import React from 'react'
import cx from 'classnames'

import { Icon } from '../Icon'
import styles from './ButtonBack.module.css'

type TButtonBackProps = {
  title: string
  onClick(): void
  className?: string
}

export const ButtonBack = ({ title, onClick, className }: TButtonBackProps) => (
  <button
    type="button"
    className={cx(styles.button, className)}
    onClick={onClick}
  >
    <Icon icon="arrowLeft" size="lg" className={styles.icon} />
    {title}
  </button>
)
