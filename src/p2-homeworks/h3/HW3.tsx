import React, { useState } from 'react'
import { v1 } from 'uuid'
import GreetingContainer from './GreetingContainer'
import s from './Greeting.module.css'

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
			<div className={s.asd}>
				<GreetingContainer users={users} addUserCallback={addUserCallback} />
				{users.map(a => {
					return (
						<div key={a._id}>{a.name}</div>
					)
				})}
			</div>
			<hr />
			{/*для личного творчества, могу проверить*/}
			{/*<AlternativeGreeting/>*/}
			<hr />
		</div>
	)
}

export default HW3
