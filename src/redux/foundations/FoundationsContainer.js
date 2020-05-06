import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllFoundations } from './duck/operations';

const FoundationsContainer = ({ foundations, getAllFoundations }) => {

    useEffect(() => {
        getAllFoundations();
    }, [])

    return (
        <ul>
            {foundations.map((foundation, i) => <li key={i}>{foundation}</li>)}
        </ul>
    )
}

const mapStateToProps = (state) => ({
    foundations: state.foundations.list
})

const mapDispatchToProps = (dispatch) => ({
    getAllFoundations: () => dispatch(getAllFoundations())
})

export default connect(mapStateToProps, mapDispatchToProps)(FoundationsContainer)