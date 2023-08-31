import React, { useMemo } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faStar,
  faRightToBracket,
  faArrowRight,
  faArrowLeft,
  faFileImage,
  faImagePortrait,
  faVideo,
} from '@fortawesome/free-solid-svg-icons'

import { TIconType, TIconSize } from '../../types'

type TIconProps = {
  size: TIconSize
  icon: TIconType
  className: string
}

export const Icon = ({ icon, size, className }: TIconProps) => {
  const renderedIcon = useMemo(() => {
    switch (icon) {
      case 'star':
        return faStar

      case 'signIn':
        return faRightToBracket

      case 'arrowRight':
        return faArrowRight

      case 'arrowLeft':
        return faArrowLeft

      case 'image':
        return faFileImage

      case 'portrait':
        return faImagePortrait

      case 'video':
        return faVideo

      // case 'github':
      //   return faGithub

      default:
        return null
    }
  }, [icon])

  if (!renderedIcon) {
    return null
  }

  return (
    <FontAwesomeIcon className={className} icon={renderedIcon} size={size} />
  )
}
