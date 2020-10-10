import React, { useState } from 'react';
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

    @media (max-width: 768px) {
        z-index: 1;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0;
        right: 0;
        background: ${({ theme }) => theme.white};
        color: ${({ theme }) => theme.grey};
        width: 100vw;
        height: 100vh;
        transition: all 0.3s linear;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
    }
`;

const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: ${({ theme }) => theme.grey};
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

    ${({ tertiary }) => {
        return (
            tertiary && css`
                @media (max-width: 768px) {
                    font-size: 30px;
                }
            `
        )
    }}
`;

const StyledScrollLink = styled(Link).attrs({
    scroll: "smooth",

})`
    text-decoration: none;
    color: ${({ theme }) => theme.grey};
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

    @media (max-width: 768px) {
        font-size: 30px;
    }
`

const Hamburger = styled.button`
    z-index: 10;
    padding: 10px;
    display: none;
    background-color: transparent;
    cursor: pointer;
    border: 0;
    margin: 0;
    width: 60px;
    position: absolute;
    top: 30px;
    right: 30px;

    @media (max-width: 768px) {
        display: inline-block;
    }
`;

const HamburgerBox = styled.span`
    width: 40px;
    height: 24px;
    display: inline-block;
    position: relative;
`;

const HamburgerInner = styled.span`
    width: 100%;
    height: 3px;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    transition: all .1s ease-in-out;
    background-color: ${({ open }) => open ? 'transparent' : ({ theme }) => theme.grey};

    &:before,
    &:after {
    width: 100%;
    height: 3px;
    background-color: ${({ theme }) => theme.grey};
    position: absolute;
    content: '';
    left: 0;
    transition: transform .2s .2s ease -in -out;
}

    &:before {
    top: -10px;
    transform: ${({ open }) => open ? 'translateY(10px) rotate(45deg)' : 'translateY(0) rotate(0)'};
}

    &:after {
    top: 10px;
    transform: ${({ open }) => open ? 'translateY(-10px) rotate(-45deg)' : 'translateY(0) rotate(0)'};
}
`;

const Header = ({ currentUser }) => {

    const logout = () => {
        auth.signOut();
    }

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    }

    const handleClose = () => {
        setOpen(false);
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

                <Hamburger open={open} onClick={handleClick}>
                    <HamburgerBox open={open}>
                        <HamburgerInner open={open} />
                    </HamburgerBox>
                </Hamburger>
                <StyledHeaderBottom open={open}>
                    <StyledNavLink onClick={handleClose} tertiary exact to='/Oddaj-w-dobre-rece/'>Start</StyledNavLink>
                    <StyledScrollLink onClick={handleClose} to='section'>O co chodzi?</StyledScrollLink>
                    <StyledScrollLink onClick={handleClose} to='about'>O nas</StyledScrollLink>
                    <StyledScrollLink onClick={handleClose} to='whowehelp'>Fundacja i organizacje</StyledScrollLink>
                    <StyledScrollLink onClick={handleClose} to='contact'>Kontakt</StyledScrollLink>
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