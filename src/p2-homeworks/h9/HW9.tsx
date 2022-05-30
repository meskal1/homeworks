import React from 'react'
import { Clock } from './Clock'
import s from './HW9.module.scss'

export const HW9 = () => {
	return (
		<>
			<div>
				<hr />
				<div className={s.main_container}>
					<div style={{ margin: "0 0 10px 0" }}>Homework 9</div>
					<Clock />
				</div>
			</div>
		</>
	)
}
