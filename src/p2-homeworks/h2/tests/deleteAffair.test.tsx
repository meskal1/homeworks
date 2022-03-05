import { AffairType, deleteAffair } from '../HW2'

let initialState: AffairType[]

beforeEach(() => {
	initialState = [
		{ _id: 1, name: 'React', priority: 'high' },
		{ _id: 2, name: 'anime', priority: 'low' },
		{ _id: 3, name: 'games', priority: 'low' },
		{ _id: 4, name: 'work', priority: 'high' },
		{ _id: 5, name: 'html & css', priority: 'middle' },
		{ _id: 6, name: 'porn', priority: 'low' },
	]
})

test.skip('delete 0', () => {
	const newState = deleteAffair(initialState, 0)
	expect(newState.length).toBe(6)
})
test.skip('delete 1', () => {
	const newState = deleteAffair(initialState, 1)
	expect(newState.length).toBe(5)
})
test.skip('delete 3', () => {
	const newState = deleteAffair(initialState, 3)
	expect(newState.length).toBe(5)
})
test.skip('delete 6', () => {
	const newState = deleteAffair(initialState, 6)
	expect(newState.length).toBe(5)
})
test.skip('delete 7', () => {
	const newState = deleteAffair(initialState, 7)
	expect(newState.length).toBe(6)
})
