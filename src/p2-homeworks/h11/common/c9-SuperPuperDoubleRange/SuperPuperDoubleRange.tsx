import React, { useCallback, useEffect, useState, useRef, MutableRefObject } from "react";
import s from './SuperPuperDoubleRange.module.scss'

type SuperPuperDoubleRangeType = {
	min: number
	max: number
}

export const SuperPuperDoubleRange: React.FC<SuperPuperDoubleRangeType> = ({ min, max }) => {
	const [minVal, setMinVal] = useState(min);
	const [maxVal, setMaxVal] = useState(max);
	const minValRef = useRef(min);
	const maxValRef = useRef(max);
	const range = useRef() as MutableRefObject<HTMLDivElement>;

	// Convert to percentage
	const getPercent = useCallback(
		(value) => Math.round(((value - min) / (max - min)) * 100),
		[min, max]
	);

	// Set width of the range to decrease from the left side
	useEffect(() => {
		const minPercent = getPercent(minVal);
		const maxPercent = getPercent(maxValRef.current);

		if (range.current) {
			range.current.style.left = `${minPercent}%`;
			range.current.style.width = `${maxPercent - minPercent}%`;
		}
	}, [minVal, getPercent]);

	// Set width of the range to decrease from the right side
	useEffect(() => {
		const minPercent = getPercent(minValRef.current);
		const maxPercent = getPercent(maxVal);

		if (range.current) {
			range.current.style.width = `${maxPercent - minPercent}%`;
		}
	}, [maxVal, getPercent]);

	return (
		<div className={s.container2}>
			<input
				type="range"
				min={min}
				max={max}
				value={minVal}
				className={`${s.thumb} ${s.thumb__left}`}
				style={{ zIndex: `${minVal > max - 100 && "5"}` }}
				onChange={(event) => {
					const value = Math.min(Number(event.target.value), maxVal - 1);
					setMinVal(value);
					minValRef.current = value;
				}} />
			<input
				type="range"
				min={min}
				max={max}
				value={maxVal}
				className={`${s.thumb} ${s.thumb__right}`}
				onChange={(event) => {
					const value = Math.max(Number(event.target.value), minVal + 1);
					setMaxVal(value);
					maxValRef.current = value;
				}} />
			<div className={s.slider}>
				<div className={s.slider__track} />
				<div ref={range} className={s.slider__range} />
				<div className={s.slider__left__value}>{minVal}</div>
				<div className={s.slider__right__value}>{maxVal}</div>
			</div>
		</div>
	);
};