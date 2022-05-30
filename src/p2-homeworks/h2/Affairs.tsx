import React from 'react';
import Affair from './Affair';
import s from './Affairs.module.scss';
import { AffairType, FilterType } from './HW2';

type AffairsPropsType = {
	data: Array<AffairType>
	setFilter: (filter: FilterType) => void
	deleteAffairCallback: (_id: number) => void
}

const Affairs = (props: AffairsPropsType) => {

	const mappedAffairs = props.data.map((a: AffairType) => {
		return (
			<Affair key={a._id} affair={a} deleteAffairCallback={props.deleteAffairCallback}
			/>)
	})

	const setAll = () => { props.setFilter(`all`) }
	const setHigh = () => { props.setFilter(`High`) }
	const setMiddle = () => { props.setFilter(`Middle`) }
	const setLow = () => { props.setFilter(`Low`) }

	return (
		<>
			<div style={{ display: "flex", justifyContent: "center", padding: "10px 0 0 0" }}>
				<div className={s.block_hw2}>
					{mappedAffairs}
					<div className={s.sort_Buttons}>
						<button onClick={setAll}>All</button>
						<button onClick={setHigh}>High</button>
						<button onClick={setMiddle}>Middle</button>
						<button onClick={setLow}>Low</button>
					</div>
				</div>
			</div>
		</>
	)
}
export default Affairs
