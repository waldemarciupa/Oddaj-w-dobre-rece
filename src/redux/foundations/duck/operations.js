import actions from './actions';
import types from './types'

const fetchFoundations = async (name) => {
    const response = await fetch(`http://localhost:3000/${name}`,
        { method: 'GET' }
    );
    const json = await response.json();

    return json;
}

export const clear = () => ({
    type: types.CLEAR
})

export const getAllFoundations = (name) =>
    async (dispatch) => {
        const foundations = await fetchFoundations(name);
        foundations.map(foundation => dispatch(actions.add(foundation)))
    }
