import { AnyAction } from 'redux'

export type LoadingStateType = {
    isLoading: boolean
}

const initState: LoadingStateType = {
    isLoading: false,
}

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingReducer = (
    state: LoadingStateType = initState,
    action: AnyAction
): LoadingStateType => {
    switch (action.type) {
        case 'CHANGE_LOADING': {
            const { isLoading } = action as LoadingActionType
            return { ...state, isLoading }
        }
        default:
            return state
    }
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})
