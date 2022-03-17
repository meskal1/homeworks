import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
	name: string
	setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
	addUser: () => void
	error: string
	totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
	{ name, setNameCallback, addUser, error, totalUsers } // деструктуризация пропсов
) => {
	let inputClass = s.error // need to fix with (?:)

	const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") addUser() // Если нажата клавиша Энтер, вызвать функцию нажатия на кнопку
	};
	return (
		<div>
			<div>
				<input value={name} onChange={setNameCallback} className={inputClass} onKeyPress={onKeyPressHandler} />
				<button onClick={addUser}>add</button>
				<span >{totalUsers}</span>
			</div>
			<span className={s.someClass}>{error}</span>
		</div>
	)
}

export default Greeting