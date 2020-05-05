import React from 'react';
import styled from 'styled-components';

const StyledListElement = styled.div`
    display: flex;
`;

const Foundations = ({ foundations }) => {



    return (
        <ul>
            {
                foundations.map((e, i) => {
                    return (
                        <li>{e.name}</li>
                    )
                })
            }
        </ul>
    )
}

export default Foundations;