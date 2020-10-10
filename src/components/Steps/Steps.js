import React from 'react';
import styled from 'styled-components';
import Button from '../Button';
import IconsCards from './IconsCards';
import Decoration from '../Decoration';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const StyledSteps = styled.div`
    width: 100%;
    min-height: 625px;
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

    @media (max-width: 400px) {
        text-align: center;
    }
`;

const Steps = (currentUser) => {
    return (
        <StyledSteps>
            <StyledTitle>
                Wystarczą 4 proste kroki
            </StyledTitle>
            <Decoration />
            <IconsCards />
            {
                currentUser.currentUser ?
                    <NavLink to='/oddaj-rzeczy'>
                        <Button texttransform="uppercase">
                            Oddaj rzeczy
                        </Button>
                    </NavLink>
                    :
                    <NavLink to='/logowanie'>
                        <Button texttransform="uppercase">
                            Oddaj rzeczy
                        </Button>
                    </NavLink>
            }
        </StyledSteps>
    )
}

const mapStateToProps = ({ user }) => {
    return {
        currentUser: user.currentUser
    }
}

export default connect(mapStateToProps)(Steps);