import React, { useState } from 'react'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import { restoreState, saveState } from './localStorage/localStorage'
import s from './HW6.module.scss'

const HW6 = () => {
	const [value, setValue] = useState<string>('')

	const save = () => {
		saveState<string>('editable-span-value', value)
	}
	const restore = () => {
		setValue(restoreState('editable-span-value', value))
	}

	return (
		<>
			<div>
				<hr />
				<div className={s.style}>
					<div style={{ display: "flex", justifyContent: "center" }}>Homework 6</div>
					<SuperEditableSpan
						value={value}
						onChangeText={setValue}
						spanProps={{ children: value ? undefined : '======>Enter text...<=====' }} />
					<div style={{ display: "flex", justifyContent: "space-between", width: "190px" }}>
						<SuperButton onClick={save}>Save</SuperButton>
						<SuperButton onClick={restore}>Restore</SuperButton>
					</div>
				</div>
			</div>
		</>
	)
}
export default HW6
