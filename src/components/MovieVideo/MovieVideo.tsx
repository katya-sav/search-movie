import React from 'react'

import { TVideo } from '../../types'

import styles from './MovieVideo.module.css'

type TMovieVideoProps = {
  video: TVideo
}

export const MovieVideo = ({ video }: TMovieVideoProps) => (
  <iframe
    className={styles.video}
    width="560"
    height="250"
    src={`https://www.youtube.com/embed/${video.path}`}
    title="YouTube video player"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  />
)

/*   <video id={video.id} width="560" height="315" controls autoPlay loop muted>
      <source
        src={`https://www.youtube.com/watch?v=${video.path}`}
        type="video/mp4"
      />
      Sorry, your browser does not support videos.
      <track kind="captions" {...video} />
    </video> */
