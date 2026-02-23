import { UserType } from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => {
    switch (action.type) {
        case 'sort': {
            const copy = [...state]
            if (action.payload === 'up') {
                return copy.sort((a, b) => a.name.localeCompare(b.name))
            } else {
                return copy.sort((a, b) => b.name.localeCompare(a.name))
            }
        }
        case 'check': {
            return state.filter((p) => p.age >= action.payload)
        }
        default:
            return state
    }
}
