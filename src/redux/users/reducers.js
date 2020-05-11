import types from './types';
import actions from './actions';

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
        default:
            return state
    }
}

export default usersReducer;