import { UserType } from '../HW8'

export const homeWorkReducer = (state: UserType[], action: { type: string; payload: string | number }): UserType[] => {
  switch (action.type) {
    case 'sort': {
      const newState = [...state]
      if (action.payload === 'down') newState.sort((a, b) => a.age - b.age)
      if (action.payload === 'up') newState.sort((a, b) => b.age - a.age)
      return newState
    }
    case 'check': {
      return state.filter(el => el.age >= action.payload)
    }
    default:
      return state
  }
}
