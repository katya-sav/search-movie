import React, { useState, useCallback } from 'react'

import { Image } from '../Image'
import { NoImage } from '../NoImage'

type TSafeImageProps = {
  src: string
  alt?: string
  className?: string
  errorClassName?: string
  onImageClick?(): void
}

export const SafeImage = ({
  src,
  className,
  errorClassName,
  alt,
  onImageClick,
}: TSafeImageProps) => {
  const [error, setError] = useState(false)

  const handleErrorLoad = useCallback(() => {
    setError(true)
  }, [])

  const isNoImageShow = !src || error

  if (isNoImageShow) {
    return <NoImage className={errorClassName} />
  }

  return (
    <Image
      src={src}
      className={className}
      alt={alt}
      onError={handleErrorLoad}
      onClick={onImageClick}
    />
  )
}
