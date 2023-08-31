import React from 'react'

import styles from './Dropdown.module.css'

type TDropdownProps = {
  open: boolean
  trigger: JSX.Element
  menu: JSX.Element[]
}

export const Dropdown = ({ open, trigger, menu }: TDropdownProps) => (
  <div className={styles.dropdown}>
    {trigger}
    {open && (
      <ul className={styles.movie}>
        {menu.map((menuItem, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={i} className={styles.movieItem}>
            {menuItem}
          </li>
        ))}
      </ul>
    )}
  </div>
)
