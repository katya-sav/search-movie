import React from 'react'
import { useNavigate } from 'react-router-dom'
// import { AiFillGithub } from 'react-icons/ai'

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
      <div>
        <p> © 2018 Ekaterina Antonova</p>
        <div>
          <a href="https://github.com/katya-sav">{/* <AiFillGithub /> */}</a>
        </div>
      </div>
    </div>
  )
}

// <p className="footer__copyright">
// © 2018 Igor Antonov
// </p>
// <div className="footer__social">
// <a className="footer__link" href="https://github.com/IgorAntonov">
//   <Icon icon="github" width="24px" height="24px" viewBox="0 0 24 24" />
// </a>
// <a className="footer__link" href="https://twitter.com/IgorAntonov18">
//   <Icon icon="twitter" width="24px" height="24px" viewBox="0 0 24 24" />
// </a>
// <a className="footer__link" href="https://vk.com/id18941999">
//   <Icon icon="vk" width="24px" height="24px" viewBox="0 0 24 24" />
// </a>
// </div>
