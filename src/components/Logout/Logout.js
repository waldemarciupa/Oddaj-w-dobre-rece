import React from 'react';
import styled from 'styled-components';
import Decoration from '../Decoration';
import { NavLink } from 'react-router-dom';

const StyledLoginWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledLoginContent = styled.div`
    width: 500px;
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    @media (max-width: 1366px) {
        height: 450px
    }
`;

const StyledTitle = styled.div`
    font-size: 38px;
    line-height: 55px;
    letter-spacing: -0.76px;
    font-weight: 400;
    text-align: center;
`;

const StylednNavLink = styled(NavLink)`
    width: 150px;
    height: 50px;
    border: 1px solid black;
    color: #000;
    font-weight: 300;
    font-size: 18px;
    text-decoration: none;
    padding: 13px;
`;

const Logout = () => {
    return (

        <StyledLoginWrapper>
            <StyledLoginContent>
                <StyledTitle>
                    Pomyślnie wylogowano!
                </StyledTitle>
                <Decoration />
                <StylednNavLink
                    to='/Oddaj-w-dobre-rece/'
                >
                    Strona Główna
                </StylednNavLink>
            </StyledLoginContent>
        </StyledLoginWrapper>

    )
}

export default Logout;