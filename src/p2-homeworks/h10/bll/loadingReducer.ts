const initState = {
  isLoading: false,
}
type InitialStateType = typeof initState
type ActionType = LoadingACType
export const loadingReducer = (state: InitialStateType = initState, action: ActionType): InitialStateType => {
  switch (action.type) {
    case 'LOADING_TRUE': {
      return {
        ...state,
        isLoading: action.payload.isLoading,
      }
    }
    default:
      return state
  }
}

type LoadingACType = ReturnType<typeof loadingAC>
export const loadingAC = (isLoading: boolean) => {
  return {
    type: 'LOADING_TRUE',
    payload: { isLoading },
  } as const
}
