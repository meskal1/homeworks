import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import { loadingAC } from './bll/loadingReducer';
import { AppStoreType } from './bll/store';

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
		<div style={{ background: "#EAEDF2", padding: "0 0 0 10px" }}>
			<hr />
			homeworks 10
			{loading ? (<div ><img style={{ width: '35px', height: '35px', padding: '0 0 0 35px' }} src="https://i.gifer.com/VAyR.gif" alt="123" /></div>)
				: (<div>
					<SuperButton onClick={setLoading}>set loading...</SuperButton>
				</div>)
			}
			<hr />
		</div>
	)
}