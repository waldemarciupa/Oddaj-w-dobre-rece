import types from './types';

const INITIAL_STATE = {
    currentUser: null
}

const userReducer = (state = INITIAL_STATE, { payload, type }) => {
    switch (type) {
        case types.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload
            }

        default:
            return state
    }
}

export default userReducer;