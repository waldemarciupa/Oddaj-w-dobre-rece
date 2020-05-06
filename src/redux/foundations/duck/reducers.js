import types from './types';

const INITIAL_STATE = {
    list: []
}

const foundationsReducer = (state = INITIAL_STATE, { payload, type }) => {
    switch (type) {
        case types.ADD_FOUNDATION:
            return {
                ...state,
                list: [
                    ...state.list,
                    payload
                ]
            }
        case types.RESET_FOUNDATIONS:
            return {
                ...state, list: []
            }
        default:
            return state
    }
}

export default foundationsReducer;