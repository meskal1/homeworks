import React, { ChangeEvent } from 'react'
import s from './SuperDoubleRange.module.scss'

type SuperDoubleRangePropsType = {
	onChangeRange: (value: [number, number]) => void
	value: [number, number]
	threshold: [number, number]
	step: number
	isDisabled: [boolean, boolean]
}

export const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = ({
	onChangeRange,
	value,
	threshold,
	step,
	isDisabled
}) => {
	const minValueBackgroundGradient = ((value[0] - threshold[0]) / (threshold[1] - threshold[0])) * 100
	const maxValueBackgroundGradient = ((value[1] - threshold[0]) / (threshold[1] - threshold[0])) * 100

	const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
		const currentValue = +e.currentTarget.value
		onChangeRange && onChangeRange(
			[e.currentTarget.id === 'input1' ? currentValue : value[0],
			(e.currentTarget.id === 'input2') && (value[0] <= currentValue) ? currentValue : value[1]])
	}

	return (
		<>
			<input
				style={{ background: `linear-gradient(to right, #eee ${minValueBackgroundGradient}%, #0075FF ${minValueBackgroundGradient}%, #0075FF ${maxValueBackgroundGradient}%, #eee ${maxValueBackgroundGradient}%)` }}
				type={'range'}
				id='input1'
				min={threshold[0]}
				max={threshold[1]}
				step={step}
				disabled={isDisabled[0]}
				className={s.input1}
				value={value[0] >= value[1] ? value[1] : value[0]}
				onChange={onChangeCallback} />
			<input
				style={value[0] === threshold[1] ? { zIndex: '1' } : {}}
				type={'range'}
				id='input2'
				min={threshold[0]}
				max={threshold[1]}
				step={step}
				disabled={isDisabled[1]}
				className={s.input2}
				value={value[1]}
				onChange={onChangeCallback} />
		</>
	)
}