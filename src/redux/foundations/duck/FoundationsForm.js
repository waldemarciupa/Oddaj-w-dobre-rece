import React from 'react';
import { connect } from 'react-redux';
import actions from './actions';

const FoundationsForm = (props) => {

    const foundationInput = React.createRef();

    const addFoundation = e => {
        e.preventDefault();
        props.add(foundationInput.current.value);
        console.log(foundationInput.current.value);

        foundationInput.current.value = '';
    }

    return (
        <form onSubmit={addFoundation} >
            <input ref={foundationInput} />
            <button type='submit'>Add Foundation</button>
        </form>
    )
}

const mapDispatchToProps = dispatch => ({
    add: foundation => dispatch(actions.add(foundation))
})

export default connect(null, mapDispatchToProps)(FoundationsForm);