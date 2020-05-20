import actions from './actions';
import types from './types'

const fetchData = async () => {
    const response = await fetch(`https://api.jsonbin.io/b/5ec55e98e91d1e45d10df5e0`,
        {
            method: 'GET'
        }
    );
    const json = await response.json();
    return json.foundations;
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
