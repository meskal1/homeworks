import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Header.module.scss'

const isActiveStyle = {
  textDecoration: 'none',
  color: 'red',
  fontSize: '17px',
}
const noneActive = {
  color: 'black',
  textDecoration: 'none',
}

export const Header = () => {
  return (
    <div className={s.block_links} style={{ textDecoration: 'none' }}>
      <NavLink to='/pre-junior' style={({ isActive }) => (isActive ? isActiveStyle : noneActive)}>
        Pre-junior
      </NavLink>
      <NavLink to='/junior' style={({ isActive }) => (isActive ? isActiveStyle : noneActive)}>
        Junior
      </NavLink>
      <NavLink to='/junior+' style={({ isActive }) => (isActive ? isActiveStyle : noneActive)}>
        Junior+
      </NavLink>
      <span>Navigation</span>
      <span className={s.transparent_text}>&larr;------------- Homework 5</span>
    </div>
  )
}
