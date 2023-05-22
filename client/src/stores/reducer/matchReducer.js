import { ADDMATCH_PENDING, ADDMATCH_REJECT, ADDMATCH_SUCCESS, FETCHMATCH_PENDING, FETCHMATCH_REJECT, FETCHMATCH_SUCCESS } from "../actions/types"

const initialState = {
    matches: [],
    isLoading: true,
    errorMsg: '',
}

export function matchReducer(state = initialState, action) {
    switch (action.type) {
        case FETCHMATCH_PENDING:
            return { ...initialState }
        case FETCHMATCH_SUCCESS:
            return { ...state, matches: action.payload, isLoading: false }
        case FETCHMATCH_REJECT:
            return { ...state, errorMsg: action.errorMsg }
        case ADDMATCH_PENDING:
            return { ...initialState }
        case ADDMATCH_SUCCESS:
            return { ...state, messageAdd: action.payload, isLoading: false }
        case ADDMATCH_REJECT:
            return { ...state, errorMsg: action.errorMsg }
        default:
            return state
    }
}