import React from 'react';
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';

const StyledHeader = styled.div`
    width: 683px;
    height: 95px;
    position: absolute;
    top: 37px;
    right: 0;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`;

const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: #3C3C3C;
    padding: 9px 20px;
    font-size: 18px;
    
    ${({ secondary }) => {
        return (
            secondary && css`
            color: #737373;
            margin-left: 10px;
            padding: 9px 10px;
            font-size: 13px;
            
            
            `
        )
    }}
`;

const StyledHeaderTop = styled.div`
    text-align: right;
`;

const StyledHeaderBottom = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const Header = () => {
    return (
        <>
            <StyledHeader>
                <StyledHeaderTop>
                    <StyledNavLink secondary to='/'>Zaloguj</StyledNavLink>
                    <StyledNavLink secondary to='/'>Załóż konto</StyledNavLink>
                </StyledHeaderTop>
                <StyledHeaderBottom>
                    <StyledNavLink exact to='/'>Start</StyledNavLink>
                    <Link to='section'>O co chodzi?</Link>
                    <StyledNavLink to='/'>O nas</StyledNavLink>
                    <StyledNavLink to='/'>Fundacja i organizacje</StyledNavLink>
                    <StyledNavLink to='/'>Kontakt</StyledNavLink>
                </StyledHeaderBottom>
            </StyledHeader>

        </>
    )
}

export default Header;