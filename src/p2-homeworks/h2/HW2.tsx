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
export type FilterType = 'all' | 'high' | 'low' | 'middle' //AffairPriorityType

const defaultAffairs: Array<AffairType> = [
	{ _id: 1, name: 'React', priority: 'high' },
	{ _id: 2, name: 'anime', priority: 'low' },
	{ _id: 3, name: 'games', priority: 'low' },
	{ _id: 4, name: 'work', priority: 'high' },
	{ _id: 5, name: 'html & css', priority: 'middle' },
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

function HW2() {
	//Массив дел
	const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs)
	const [filter, setFilter] = useState<FilterType>('all')
	//Отфильтрованный массив дел по приоритету
	const filteredAffairs = filterAffairs(affairs, filter)
	//Новый отрисованный массив после удаления дела(элемента)
	const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id))

	// console.log(deleteAffairCallback(2));
	// console.log(filteredAffairs);


	return (
		<div>
			<hr />
			homework 2
			{/*should work (должно работать)*/}
			<Affairs data={filteredAffairs} setFilter={setFilter} deleteAffairCallback={deleteAffairCallback} />
			<hr />
			{/*для личного творчества, могу проверить*/}
			{/*<AlternativeAffairs/>*/}
			<hr />
		</div>
	)
}
export default HW2
