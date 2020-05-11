import types from './types';

const INITIAL_STATE = {
    current: {}
}

const usersReducer = (state = INITIAL_STATE, { payload, type }) => {
    switch (type) {
        case types.SET_CURRENT_USER:
            return {
                ...state,
                current: payload
            }
        case types.LOGOUT_CURRENT_USER:
            return {
                ...state,
                current: {}
            }
        default:
            return state
    }
}

export default usersReducer;