import React from 'react'

import styles from './Dropdown.module.css'

type TDropdownProps = {
  open: boolean
  trigger: JSX.Element
  menu: JSX.Element[]
  onMouseEnter: (e: React.MouseEvent<HTMLDivElement>) => void
  onMouseLeave: (e: React.MouseEvent<HTMLDivElement>) => void
}

export const Dropdown = ({
  open,
  trigger,
  menu,
  onMouseEnter,
  onMouseLeave,
}: TDropdownProps) => (
  <div
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    className={styles.dropdown}
  >
    {trigger}
    {open && (
      <div className={styles.movie}>
        {menu.map((menuItem, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={i} className={styles.movieItem}>
            {menuItem}
          </div>
        ))}
      </div>
    )}
  </div>
)
