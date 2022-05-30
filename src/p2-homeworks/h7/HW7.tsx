import React, { useState } from 'react'
import { SuperSelect } from './common/c5-SuperSelect/SuperSelect'
import { SuperRadio } from './common/c6-SuperRadio/SuperRadio'

const arr = ['x', 'y', 'z']

export const HW7 = () => {
	const [value, onChangeOption] = useState(arr[1])

	return (
		<>
			<div>
				<hr />
				<div style={{ display: "flex", justifyContent: "center", margin: "0 0 10px 0" }}>Homework 7</div>
				<div style={{ display: "flex", justifyContent: "center", margin: "0 0 10px 0" }}>
					<SuperSelect
						options={arr}
						value={value}
						onChangeOption={onChangeOption}
						style={{ width: '85px' }} />
				</div>
				<div style={{ display: "flex", justifyContent: "center" }}>
					<SuperRadio
						name={'radio'}
						options={arr}
						value={value}
						onChangeOption={onChangeOption} />
				</div>
			</div>
		</>
	)
}
