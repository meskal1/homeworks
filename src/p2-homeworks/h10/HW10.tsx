import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import { loadingAC } from './bll/loadingReducer';
import { AppStoreType } from './bll/store';
import s from './HW10.module.scss'

export const HW10 = () => {

	const dispatch = useDispatch();
	const loading = useSelector<AppStoreType, boolean>(state => state.loading.isLoading);

	const setLoading = () => {
		dispatch(loadingAC(true))
		setTimeout(() => {
			dispatch(loadingAC(false))
		}, 1000)
	};

	return (
		<>
			<div>
				<hr />
				<div className={s.container}>
					<div style={{ margin: "0 0 10px 0" }}>Homework 10</div>
					{loading ? (<div ><img style={{ width: '30px', height: '30px' }} src="https://i.gifer.com/VAyR.gif" alt="123" /></div>)
						: (<div>
							<SuperButton onClick={setLoading}>Set loading...</SuperButton>
						</div>)
					}
				</div>
			</div>
		</>
	)
}