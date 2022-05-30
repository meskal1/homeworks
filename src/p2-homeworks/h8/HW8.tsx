import React, { useState } from 'react'
import { homeWorkReducer } from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './HW8.module.scss'

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

export const HW8 = () => {
	const [people, setPeople] = useState<UserType[]>(initialPeople)

	const finalPeople = people.map((p: {
		_id: number
		name: string
		age: number
	}) => (
		<div key={p._id} className={s.sort_list}>
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
		<>
			<div>
				<hr />
				<div className={s.container}>
					<div style={{ margin: "0 0 10px 0" }}>Homework 8</div>
					{finalPeople}
					<div style={{ display: "flex", justifyContent: "space-between" }}>
						<SuperButton onClick={sortUp}>Sort up</SuperButton>
						<SuperButton onClick={sortDown}>Sort down</SuperButton>
						<SuperButton onClick={check}>Check 18</SuperButton>
					</div>
				</div>
			</div>
		</>
	)
}
