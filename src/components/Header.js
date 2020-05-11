import React from 'react';
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';

import { connect } from 'react-redux';

const StyledHeader = styled.div`
    width: 683px;
    height: 95px;
    position: absolute;
    top: 37px;
    right: 0;
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    @media (max-width: 1366px) {
        top: 17px;
        height: 55px;
    }
`;

const StyledHeaderTop = styled.div`
    text-align: right;
`;

const StyledHeaderTopUser = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const StyledUser = styled.p`
    font-size: 14px;
    font-weight: 400;
    color: #000;
    padding: 9px 20px;
`;

const StyledHeaderBottom = styled.div`
    display: flex;
    justify-content: flex-end;
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
            /* margin-left: 10px; */
            padding: 9px 20px;
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
            padding: 9px 20px;
            font-size: 13px;
            `
        )
    }}
`

const Header = ({ user }) => {

    const isLoggedIn = user?.email;

    console.log(!!isLoggedIn);

    return (
        <>
            <StyledHeader>
                {
                    isLoggedIn ?
                        <StyledHeaderTopUser>
                            <StyledUser>Cześć {user?.email}!</StyledUser>
                            <StyledNavLink
                                secondary='true'
                                to='/logowanie'>
                                Oddaj rzeczy</StyledNavLink>
                            <StyledNavLink
                                secondary='true'
                                to='/logowanie'>
                                Wyloguj</StyledNavLink>
                        </StyledHeaderTopUser>
                        :
                        <StyledHeaderTop>
                            <StyledNavLink
                                secondary='true'
                                to='/logowanie'>
                                Zaloguj
                            </StyledNavLink>
                            <StyledNavLink
                                secondary='true'
                                to='/rejestracja'>
                                Załóż konto
                        </StyledNavLink>
                        </StyledHeaderTop>
                }

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

const mapStateToProps = ({ users }) => {
    // console.log(users)
    // console.log(users.current.email)
    return {
        user: users.current
    }

}

export default connect(mapStateToProps)(Header);