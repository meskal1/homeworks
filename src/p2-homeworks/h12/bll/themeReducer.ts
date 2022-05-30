const initState = 'some'
type InitStateType = string

type ActionType = ChangeThemeCType
export const themeReducer = (state: InitStateType = initState, action: ActionType): InitStateType => {
	switch (action.type) {
		case "ON_CHANGE_THEME": {
			return action.payload.theme;
		}
		default: return state;
	}
};

type ChangeThemeCType = ReturnType<typeof changeThemeC>
export const changeThemeC = (theme: string) => {
	return {
		type: "ON_CHANGE_THEME",
		payload: { theme }
	} as const
}; 