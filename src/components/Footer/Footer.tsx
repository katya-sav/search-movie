import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaGithub, FaTelegram } from 'react-icons/fa'

import styles from './Footer.module.css'

export const Footer = () => {
  const navigate = useNavigate()

  return (
    <div className={styles.header}>
      <button
        type="button"
        className={styles.name}
        onClick={() => navigate('/', { replace: false })}
      >
        Search Movie
      </button>
      <div className={styles.section}>
        <p className={styles.copyright}> © 2023 Ekaterina Antonova</p>
        <div className={styles.social}>
          <a
            className={styles.iconMobile}
            href="https://github.com/katya-sav"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={15} />
          </a>
          <a
            className={styles.icon}
            href="https://github.com/katya-sav"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={25} />
          </a>
          <a
            className={styles.iconMobile}
            href="https://t.me/a_katiko"
            target="_blank"
            rel="noreferrer"
          >
            <FaTelegram size={15} />
          </a>
          <a
            className={styles.icon}
            href="https://t.me/a_katiko"
            target="_blank"
            rel="noreferrer"
          >
            <FaTelegram size={25} />
          </a>
        </div>
      </div>
    </div>
  )
}
