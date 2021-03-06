import types from './types';

const INITIAL_STATE = {
    list: [],
    current: {}
}

const foundationsReducer = (state = INITIAL_STATE, { payload, type }) => {
    switch (type) {
        case types.ADD_FOUNDATION:
            return {
                ...state,
                list: payload,
                current: payload.find(el => el.name === "foundation")
            }
        case types.RESET_FOUNDATIONS:
            return {
                ...state, list: []
            }
        case types.SET_CURRENT_FUNDATION:
            return {
                ...state,
                current: state.list.find(el => el.name === payload)
            }
        case types.CLEAR:
            return INITIAL_STATE
        default:
            return state
    }
}

export default foundationsReducer;