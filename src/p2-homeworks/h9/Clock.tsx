import React, { MouseEvent, useState } from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

function Clock() {
	const [timerId, setTimerId] = useState<number>(0)
	const [date, setDate] = useState<Date>(new Date())
	const [show, setShow] = useState<boolean>(false)

	const stop = () => {
		clearTimeout(timerId)
	}
	const start = () => {
		stop()
		const id: number = window.setInterval(() => {
			setDate(new Date())
		}, 1000)
		setTimerId(id)
	}

	const onMouseEnter = (e: MouseEvent<HTMLDivElement>) => {
		setShow(true)
	}
	const onMouseLeave = () => {
		setShow(false)
	}
	const minutes = date.getMinutes();
	const hours = date.getHours();
	const seconds = date.getSeconds();
	const month = date.getDay()
	const day = date.getDate()
	const stringTime = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`
	const stringDate = `${day < 10 ? '0' + day : day}.${month < 10 ? '0' + month : month}.${date.getFullYear()}`

	return (
		<div>
			<div style={{ height: "50px" }}>
				<div
					onMouseEnter={onMouseEnter}
					onMouseLeave={onMouseLeave}
				>
					{stringTime}
				</div>

				{show && (
					<div>
						{stringDate}
					</div>
				)}
			</div>

			<div style={{ display: "flex", gap: "20px" }}>
				<SuperButton onClick={start}>start</SuperButton>
				<SuperButton onClick={stop}>stop</SuperButton>
			</div>

		</div >
	)
}

export default Clock
