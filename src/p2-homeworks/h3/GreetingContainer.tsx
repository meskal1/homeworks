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
	const [error, setError] = useState<string | null>(null)
	let [totalUsers, setTotalUsers] = useState(0)

	const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
		setName(e.currentTarget.value)
		if (e.currentTarget.value !== '') setError('')
	}

	const addUser = () => {
		if (name.trim() === '') {
			setError('Введите имя')
		} else if (name.trim() !== '') {
			setError('')
			alert(`Hello ${name.trim()}!`);
			addUserCallback(name.trim());
			setTotalUsers(++totalUsers);
			setName('')
		}
	}

	return (
		<Greeting
			name={name}
			setNameCallback={setNameCallback}
			addUser={addUser}
			error={error}
			totalUsers={totalUsers} />
	)
}
export default GreetingContainer
