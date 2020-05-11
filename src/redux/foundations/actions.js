import types from './types';

const add = item => ({
    type: types.ADD_FOUNDATION,
    payload: item
});

const reset = () => ({
    type: types.RESET_FOUNDATIONS
});

export default {
    add,
    reset
};