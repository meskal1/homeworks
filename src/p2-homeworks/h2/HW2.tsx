import React, { useState } from 'react'
import Affairs from './Affairs'

// types
export type AffairPriorityType = {
	priority: string
}
export type AffairType = {
	_id: number
	name: string
	priority: string
}
export type FilterType = 'all' | 'High' | 'Low' | 'Middle' //AffairPriorityType

const defaultAffairs: Array<AffairType> = [
	{ _id: 1, name: 'React', priority: 'High' },
	{ _id: 2, name: 'Anime', priority: 'Low' },
	{ _id: 3, name: 'Games', priority: 'Low' },
	{ _id: 4, name: 'Work', priority: 'High' },
	{ _id: 5, name: 'HTML & CSS', priority: 'Middle' },
]
// pure helper functions
//Возвращает отфильтрованный массив дел по приоритету
export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): Array<AffairType> => {
	if (filter === 'all') return affairs
	else return affairs.filter(a => a.priority === filter)
}
//Возвращает оставшийся массив после удаления дела(элемента)
export const deleteAffair = (affairs: Array<AffairType>, _id: number): Array<AffairType> => {
	return affairs.filter(a => a._id !== _id)
}

const HW2 = () => {
	//Массив дел
	const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs)
	const [filter, setFilter] = useState<FilterType>('all')
	//Отфильтрованный массив дел по приоритету
	const filteredAffairs = filterAffairs(affairs, filter)
	//Новый отрисованный массив после удаления дела(элемента)
	const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id))

	return (
		<>
			<div>
				<hr />
				<div style={{ display: "flex", justifyContent: "center" }}>Homework 2</div>
				<Affairs data={filteredAffairs} setFilter={setFilter} deleteAffairCallback={deleteAffairCallback} />
			</div>
		</>
	)
}
export default HW2
