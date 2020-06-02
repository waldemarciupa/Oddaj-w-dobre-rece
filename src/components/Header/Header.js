import React from 'react';
import styled, { css } from 'styled-components';
import { auth } from '../../firebase/firebase.utils';
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
const Header = ({ currentUser }) => {

    const logout = () => {
        auth.signOut();
    }

    return (
        <>
            <StyledHeader>
                {
                    currentUser ?
                        <StyledHeaderTopUser>
                            <StyledUser>Cześć {currentUser?.email}!</StyledUser>
                            <StyledNavLink
                                secondary='true'
                                to='/oddaj-rzeczy/'
                                style={{ color: "#000" }}
                            >
                                Oddaj rzeczy</StyledNavLink>
                            <StyledNavLink
                                secondary='true'
                                to='/wylogowano'
                                onClick={logout}
                            >
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
                    <StyledNavLink exact to='/Oddaj-w-dobre-rece/'>Start</StyledNavLink>
                    <StyledScrollLink to='section'>O co chodzi?</StyledScrollLink>
                    <StyledScrollLink to='about'>O nas</StyledScrollLink>
                    <StyledScrollLink to='whowehelp'>Fundacja i organizacje</StyledScrollLink>
                    <StyledScrollLink to='contact'>Kontakt</StyledScrollLink>
                </StyledHeaderBottom>
            </StyledHeader>

        </>
    )
}

const mapStateToProps = ({ user }) => {
    return {
        currentUser: user.currentUser
    }
}

export default connect(mapStateToProps)(Header);