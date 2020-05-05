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
    font-size:  18px;
    
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

const StyledScrollLink = styled(Link).attrs({
    scroll: "smooth",

})`
    text-decoration: none;
    color: #3C3C3C;
    padding: 9px 20px;
    font-size:  18px;
    cursor: pointer;
    
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
`

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
                    <StyledNavLink secondary='true' to='/logowanie'>Zaloguj</StyledNavLink>
                    <StyledNavLink secondary='true' to='/rejestracja'>Załóż konto</StyledNavLink>
                </StyledHeaderTop>
                <StyledHeaderBottom>
                    <StyledNavLink exact to='/'>Start</StyledNavLink>
                    <StyledScrollLink to='section'>O co chodzi?</StyledScrollLink>
                    <StyledScrollLink to='about'>O nas</StyledScrollLink>
                    <StyledScrollLink to='whowehelp'>Fundacja i organizacje</StyledScrollLink>
                    <StyledScrollLink to='contact'>Kontakt</StyledScrollLink>
                </StyledHeaderBottom>
            </StyledHeader>

        </>
    )
}

export default Header;