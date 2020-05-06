import actions from './actions';

const fetchFoundations = async () => {
    const response = await fetch('http://localhost:3000/foundations',
        { method: 'GET' }
    );
    const json = await response.json();
    return json;
}

export const getAllFoundations = () =>
    async (dispatch) => {
        const foundations = await fetchFoundations();
        console.log(foundations);
        foundations.map(foundation => dispatch(actions.add(foundation.name)))
    }
