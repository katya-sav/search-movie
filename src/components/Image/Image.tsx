import React, { useCallback } from 'react'
import cx from 'classnames'

import styles from './Image.module.css'

type TImageProps = {
  src: string
  alt?: string
  className?: string
  onError?: () => void
  onSuccess?: () => void
  onClick?: () => void
}

export const Image = ({
  alt,
  src,
  className,
  onError,
  onSuccess,
  onClick,
}: TImageProps) => {
  const handleOnError = () => {
    onError?.()
  }

  const handleOnSuccess = () => {
    onSuccess?.()
  }

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === 'Enter') {
        e.preventDefault()

        onClick?.()
      }
    },
    [onClick],
  )

  return (
    <img
      onClick={onClick}
      onKeyDown={handleKeyDown}
      // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
      role="button"
      tabIndex={0}
      className={cx(styles.image, className)}
      src={src}
      alt={alt}
      onError={handleOnError}
      onLoad={handleOnSuccess}
    />
  )
}
