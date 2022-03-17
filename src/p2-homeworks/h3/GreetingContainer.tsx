import React, { ChangeEvent, useState } from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'

type GreetingContainerPropsType = {
	users: UserType[]
	addUserCallback: (name: string) => void
}
// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {
// более современный и удобный для про :)
// уровень локальной логики

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({ users, addUserCallback }) => { // деструктуризация пропсов
	const [name, setName] = useState<string>('')
	const [error, setError] = useState<string>('')

	const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
		setName(e.currentTarget.value)
	}
	const addUser = () => {
		if (name === '') {
			setError('Введите имя')
		} else {
			setError('')
			alert(`Hello ${name}!`);
			addUserCallback(name);
			setTotalUsers(++totalUsers);
			setName('')
		}
	}

	let [totalUsers, setTotalUsers] = useState(0)

	return (
		<Greeting name={name} setNameCallback={setNameCallback} addUser={addUser}
			error={error} totalUsers={totalUsers} />
	)
}

export default GreetingContainer
