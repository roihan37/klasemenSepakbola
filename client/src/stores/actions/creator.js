import { ADDCLUB_PENDING, ADDCLUB_REJECT, ADDCLUB_SUCCESS, ADDMATCH_REJECT, FETCHCLUB_PENDING, FETCHCLUB_REJECT, FETCHCLUB_SUCCESS, FETCHMATCH_PENDING, FETCHMATCH_REJECT, FETCHMATCH_SUCCESS } from "./types"



export function pendingClub() {
    return {
        type: FETCHCLUB_PENDING,
    }
}

export function successClub(payload) {
    return {
        type: FETCHCLUB_SUCCESS,
        payload
    }
}

export function rejectClub(error) {
    return {
        type: FETCHCLUB_REJECT,
        errorMsg: error
    }
}

export function pendingAddClub() {
    return {
        type: ADDCLUB_PENDING,
    }
}

export function successAddClub(payload) {
    return {
        type: ADDCLUB_SUCCESS,
        payload
    }
}

export function rejectAddClub(error) {
    return {
        type: ADDCLUB_REJECT,
        errorMsg: error
    }
}


export function pendingMatch() {
    return {
        type: FETCHMATCH_PENDING,
    }
}

export function successMatch(payload) {
    return {
        type: FETCHMATCH_SUCCESS,
        payload
    }
}

export function rejectMatch(error) {
    return {
        type: FETCHMATCH_REJECT,
        errorMsg: error
    }
}


export function pendingAddMatch() {
    return {
        type: ADDCLUB_PENDING,
    }
}

export function successAddMatch(payload) {
    return {
        type: ADDCLUB_SUCCESS,
        payload
    }
}

export function rejectAddMatch(error) {
    return {
        type: ADDMATCH_REJECT,
        errorMsg: error
    }
}

export function fetchClub() {
    return async (dispatch, getState) => {
        console.log("masukk");
        try {
            dispatch(pendingClub())
            const response = await fetch('http://localhost:3000/clubs', {
                method: 'GET',
            })
            const responseJson = await response.json()
            console.log(response,'<<< ini response');
            console.log(responseJson);
            dispatch(successClub(responseJson))
        } catch (error) {
            // console.log(error);
            dispatch(rejectClub(error))
        }
    }
}

export function addClub(formClub) {
    return async (dispatch,getState) => {
        console.log("masukk");
        try {
            const response = await fetch('http://localhost:3000/clubs', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formClub)
            })
            const responseJson = await response.json()
            if (!response.ok) {
                throw new Error(responseJson.message)
            }
            console.log(responseJson);
            dispatch(successAddClub())
            return responseJson
        } catch (error) {
            dispatch(rejectAddClub())
            throw error
        }
    }
}

export function fetchMatch() {
    return async (dispatch, getState) => {
        console.log("masukk");
        try {
            dispatch(pendingMatch())
            const response = await fetch('http://localhost:3000/match', {
                method: 'GET',
            })
            const responseJson = await response.json()
            console.log(response,'<<< ini response');
            console.log(responseJson);
            dispatch(successMatch(responseJson))
        } catch (error) {
            // console.log(error);
            dispatch(rejectMatch(error))
        }
    }
}


export function addMatches(formMatch) {
    return async (dispatch,getState) => {
        console.log(formMatch, '<<< from nya');
        try {
            const response = await fetch('http://localhost:3000/match/multiple', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formMatch)
            })
            const responseJson = await response.json()
            if (!response.ok) {
                throw new Error(responseJson.message)
            }
            console.log(responseJson);
            dispatch(successAddClub())
            return responseJson
        } catch (error) {
            dispatch(rejectAddClub())
            throw error
        }
    }
}