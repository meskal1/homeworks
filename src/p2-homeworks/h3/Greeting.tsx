import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
	name: string
	setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
	addUser: () => void
	error: string | null
	totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
	{ name, setNameCallback, addUser, error, totalUsers } // деструктуризация пропсов
) => {
	let inputClass = error ? s.error : s.nonstyle

	const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") addUser() // Если нажата клавиша Энтер, вызвать функцию нажатия на кнопку
	};
	return (
		<div className={s.block}>
			<div className={s.block_container}>
				<input value={name} onChange={setNameCallback} className={inputClass} onKeyPress={onKeyPressHandler} />
				<button onClick={addUser}>add</button>
				<span >{'Total added users ' + totalUsers}</span>
			</div>
			<span className={s.someClass}>{error}</span>
		</div>
	)
}

export default Greeting