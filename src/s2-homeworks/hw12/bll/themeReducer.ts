import { AnyAction } from 'redux'

export type ThemeStateType = {
    themeId: number
}

const initState: ThemeStateType = {
    themeId: 1,
}

type ChangeThemeIdActionType = {
    type: 'SET_THEME_ID'
    id: number
}

export const themeReducer = (
    state: ThemeStateType = initState,
    action: AnyAction
): ThemeStateType => {
    switch (action.type) {
        case 'SET_THEME_ID': {
            const { id } = action as ChangeThemeIdActionType
            return { ...state, themeId: id }
        }
        default:
            return state
    }
}

export const changeThemeId = (id: number): ChangeThemeIdActionType => ({
    type: 'SET_THEME_ID',
    id,
})
