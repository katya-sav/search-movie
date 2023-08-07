import React from 'react'

import styles from './Modal.module.css'

type TModalProps = {
  content: JSX.Element
  onCloseClick: () => void
}

export const Modal = ({ content, onCloseClick }: TModalProps) => (
  <div className={styles.modalOverlay}>
    <button className={styles.modalClose} type="button" onClick={onCloseClick}>
      Close
    </button>
    <div className={styles.modal}>{content}</div>
  </div>
)
