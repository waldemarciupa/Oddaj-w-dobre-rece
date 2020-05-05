import React from 'react';
import styled from 'styled-components';
import Button from '../Button';
import IconsCards from './IconsCards';
import Decoration from '../Decoration';
import { NavLink } from 'react-router-dom';

const StyledSteps = styled.div`
    width: 100%;
    height: 625px;
    margin-top: 55px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const StyledTitle = styled.div`
    font-size: 38px;
    line-height: 55px;
    letter-spacing: -0.76px;
    font-weight: 400;
`;

const Steps = () => {
    return (
        <StyledSteps>
            <StyledTitle>
                Wystarczą 4 proste kroki
            </StyledTitle>
            <Decoration />
            <IconsCards />
            <NavLink to='/logowanie'>
                <Button texttransform="uppercase">
                    Oddaj rzeczy
            </Button>
            </NavLink>
        </StyledSteps>
    )
}

export default Steps;