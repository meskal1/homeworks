import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Header.module.scss'
const isActiveStyle = {
	textDecoration: 'none',
	color: 'red'
};
function Header() {
	return (
		<div className={s.block_links}>
			<NavLink to="/pre-junior" className={s.qwe} style={({ isActive }) => isActive ? isActiveStyle : {}}>pre-junior</NavLink>
			<NavLink to="/junior" className={s.qew} style={({ isActive }) => isActive ? isActiveStyle : {}}>junior</NavLink>
			<NavLink to="/junior+" className={s.qew} style={({ isActive }) => isActive ? isActiveStyle : {}}>junior+</NavLink>
			<span>Navigation</span>
		</div>
	)
}

export default Header
