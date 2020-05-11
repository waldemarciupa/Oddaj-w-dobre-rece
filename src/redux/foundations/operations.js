import actions from './actions';
import types from './types'

const fetchData = async () => {
    const response = await fetch(`http://localhost:3000/foundations`,
        {
            method: 'GET'
        }
    );
    const json = await response.json();
    return json;
}

export const clear = () => ({
    type: types.CLEAR
})

export const getCurrentFundation = fundation => ({
    type: types.SET_CURRENT_FUNDATION,
    payload: fundation
})

export const getAllData = () =>
    async (dispatch) => {
        const foundations = await fetchData();
        dispatch(actions.add(foundations))
    }
