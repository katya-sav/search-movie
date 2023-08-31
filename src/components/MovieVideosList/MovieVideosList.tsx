import React, { useMemo } from 'react'
import cx from 'classnames'

import { MovieVideo } from '../MovieVideo/MovieVideo'
import { TVideo } from '../../types'
import styles from './MovieVideosList.module.css'

type TMovieVideosListProps = {
  videos: TVideo[]
  className?: string
}

export const MovieVideosList = ({
  videos,
  className,
}: TMovieVideosListProps) => {
  const renderVideos = useMemo(
    () => videos.map(video => <MovieVideo key={video.id} video={video} />),
    [videos],
  )

  if (!videos.length) {
    return null
  }

  return (
    <div>
      <div className={cx(styles.list, className)}>{renderVideos}</div>
    </div>
  )
}
