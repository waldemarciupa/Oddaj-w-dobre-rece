import React from 'react';

const Foundations = ({ foundations }) => {

    return (
        <ul>
            {
                foundations.map((e, i) => {
                    return (
                        <li key={i}>{e.name}</li>
                    )
                })
            }
        </ul>
    )
}

export default Foundations;