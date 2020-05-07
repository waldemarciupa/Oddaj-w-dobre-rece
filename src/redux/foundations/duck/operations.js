import actions from './actions';
import types from './types'

const fetchData = async () => {
    const response = await fetch(`http://localhost:3000/foundations`,
        { method: 'GET' }
    );
    const json = await response.json();

    return json;
}

export const clear = () => ({
    type: types.CLEAR
})

export const getAllData = () =>
    async (dispatch) => {
        const foundations = await fetchData();
        foundations.map(foundation => dispatch(actions.add(foundation)));
    }
