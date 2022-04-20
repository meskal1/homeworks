import React, { useState } from 'react'
import { homeWorkReducer } from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

export type UserType = {
	_id: number
	name: string
	age: number
}

const initialPeople = [
	{ _id: 0, name: 'Кот', age: 3 },
	{ _id: 1, name: 'Александр', age: 66 },
	{ _id: 2, name: 'Коля', age: 16 },
	{ _id: 3, name: 'Виктор', age: 44 },
	{ _id: 4, name: 'Дмитрий', age: 40 },
	{ _id: 5, name: 'Ирина', age: 55 },
]

function HW8() {
	const [people, setPeople] = useState<UserType[]>(initialPeople)

	const finalPeople = people.map((p: {
		_id: number
		name: string
		age: number
	}) => (
		<div key={p._id} style={{ display: 'flex', justifyContent: 'space-between', width: '250px' }}>
			<div>{p.name}</div>
			<div>{p.age}</div>
		</div>
	))

	const sortUp = () => {
		setPeople(homeWorkReducer(initialPeople, { type: 'sort', payload: 'up' }));
	}
	const sortDown = () => {
		setPeople(homeWorkReducer(initialPeople, { type: 'sort', payload: 'down' }));
	}
	const check = () => {
		setPeople(homeWorkReducer(initialPeople, { type: 'check', payload: 18 }));
	}

	return (
		<div style={{ background: '#EAEDF2', padding: '0 10px' }}>
			<hr />
			homeworks 8
			{/*should work (должно работать)*/}
			<div style={{ margin: '10px 0 15px 0' }}>{finalPeople}</div>
			<div style={{ display: 'flex', gap: '15px' }}>
				<SuperButton onClick={sortUp}>sort up</SuperButton>
				<SuperButton onClick={sortDown}>sort down</SuperButton>
				<SuperButton onClick={check}>check 18</SuperButton>
			</div>
			<hr />
			{/*для личного творчества, могу проверить*/}
			{/*<AlternativePeople/>*/}
			<hr />
		</div>
	)
}

export default HW8
