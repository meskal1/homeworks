import React, { useState } from 'react'
import { v1 } from 'uuid'
import GreetingContainer from './GreetingContainer'

// types
export type UserType = {
	_id: string
	name: string
}

// уровень работы с глобальными данными
function HW3() {
	const [users, setUsers] = useState<UserType[]>([])

	const addUserCallback = (name: string) => {
		setUsers([{ _id: v1(), 'name': name }, ...users])
	}

	return (
		<div>
			<hr />
			homeworks 3

			{/*should work (должно работать)*/}
			<GreetingContainer users={users} addUserCallback={addUserCallback} />
			{users.map(a => {
				return (
					<div key={a._id}>{a.name}</div>
				)
			})}
			<hr />
			{/*для личного творчества, могу проверить*/}
			{/*<AlternativeGreeting/>*/}
			<hr />
		</div>
	)
}

export default HW3
