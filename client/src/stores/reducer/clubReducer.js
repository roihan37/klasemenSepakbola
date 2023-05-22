import { ADDCLUB_PENDING, ADDCLUB_REJECT, ADDCLUB_SUCCESS, FETCHCLUB_PENDING, FETCHCLUB_REJECT, FETCHCLUB_SUCCESS } from "../actions/types"

const initialState = {
    clubs: [],
    isLoading: true,
    errorMsg: '',
}

export function clubReducer(state = initialState, action) {
    switch (action.type) {
        case FETCHCLUB_PENDING:
            return { ...initialState }
        case FETCHCLUB_SUCCESS:
            return { ...state, clubs: action.payload, isLoading: false }
        case FETCHCLUB_REJECT:
            return { ...state, errorMsg: action.errorMsg }
        case ADDCLUB_PENDING:
            return { ...initialState }
        case ADDCLUB_SUCCESS:
            return { ...state, messageAdd: action.payload, isLoading: false }
        case ADDCLUB_REJECT:
            return { ...state, errorMsg: action.errorMsg }
        default:
            return state
    }
}