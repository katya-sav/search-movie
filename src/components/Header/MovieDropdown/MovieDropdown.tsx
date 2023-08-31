import React, { useState, useCallback, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'

import { Dropdown } from '../../Dropdown/Dropdown'
import { DROPDOWN_CONFIG } from './constants'

import styles from './MovieDropdown.module.css'

export const MovieDropdown = () => {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(!open)
  }

  const handleClose = () => {
    setOpen(!open)
  }

  const handleNavigate = useCallback(
    (path: string) => {
      navigate(path, { replace: false })
      setOpen(false)
    },
    [navigate],
  )

  const dropdownMenu = useMemo(
    () =>
      DROPDOWN_CONFIG.map(({ title, path }) => (
        <button
          onClick={() => handleNavigate(path)}
          className={styles.item}
          type="button"
        >
          {title}
        </button>
      )),
    [handleNavigate],
  )

  return (
    <div onMouseEnter={handleOpen} onMouseLeave={handleClose}>
      <Dropdown
        open={open}
        trigger={
          <button className={styles.button} type="button">
            Movies
          </button>
        }
        menu={dropdownMenu}
      />
    </div>
  )
}
