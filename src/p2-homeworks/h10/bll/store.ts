import { combineReducers, createStore } from 'redux'
import { loadingReducer } from './loadingReducer'

const reducers = combineReducers({
	loading: loadingReducer,
})

export type AppStoreType = ReturnType<typeof reducers>
export const store = createStore(reducers)

// @ts-ignore
window.store = store // for dev
