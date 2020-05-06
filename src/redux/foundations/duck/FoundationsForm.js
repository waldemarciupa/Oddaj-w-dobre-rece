import React from 'react';
import { connect } from 'react-redux';
import actions from './actions';

const FoundationsForm = ({ add }) => {

    const foundationInput = React.createRef();
    const missionInput = React.createRef();
    const thingsInput = React.createRef();


    const addFoundation = e => {
        e.preventDefault();
        add({
            name: foundationInput.current.value,
            mission: missionInput.current.value,
            things: thingsInput.current.value
        });

        foundationInput.current.value = '';
        missionInput.current.value = '';
        thingsInput.current.value = '';
    }

    return (
        <form onSubmit={addFoundation} >
            <label>Foundation name:</label>
            <input ref={foundationInput} />
            <label>Mission:</label>
            <input ref={missionInput} />
            <label>Things:</label>
            <input ref={thingsInput} />
            <button type='submit'>Add Foundation</button>
        </form>
    )
}

const mapDispatchToProps = dispatch => ({
    add: foundation => dispatch(actions.add(foundation))
})

export default connect(null, mapDispatchToProps)(FoundationsForm);