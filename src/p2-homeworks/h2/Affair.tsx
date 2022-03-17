import React from 'react';
import s from './Affairs.module.css';
import { AffairType } from './HW2';

type AffairPropsType = {
	// key не нужно типизировать
	affair: AffairType
	deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
	const deleteCallback = () => {
		props.deleteAffairCallback(props.affair._id)
	}
	return (
		<div className={s.affair}>
			<div className={s.name}>{props.affair.name}</div>
			<div className={s.priority}>{props.affair.priority}</div>
			<button className={s.del_button} onClick={deleteCallback}>X</button>
		</div>
	)
}

export default Affair
