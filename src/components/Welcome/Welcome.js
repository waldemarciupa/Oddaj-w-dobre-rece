import React from 'react';
import styled from 'styled-components';
import homeHeroImage from '../../assets/Home-Hero-Image.jpg';
import decoration from '../../assets/Decoration.svg';
import Button from '../Button';
import { NavLink } from 'react-router-dom';

const StyledWelcomeWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
`;

const StyledWelcomeLeft = styled.div`
    width: 100%;
    background-image: url(${homeHeroImage});
    background-size: cover;
    background-position: right;
`;

const StyledWelcomeRight = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledRightWrapper = styled.div`
    width: 674px;
    height: 350px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-image: url(${decoration});
    background-repeat: no-repeat;
    background-position: center;

    @media (max-width: 1366px) {
        margin-top: 100px;
    }
`;

const StyledWelcomeTitle = styled.h1`
    font-size: 38px;
    font-weight: 400;
    line-height: 55px;
    letter-spacing: -0.76px;
`;

const StyledButtonsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

// const StyledButtonRedirect = styled(NavLink)`
//     border: 0.75px solid #3C3C3C;
//     width: 310px;
//     height: 120px;
//     cursor: pointer;
//     font-size: 36px;
//     line-height: 45px;
//     text-align: center;
//     font-family: ${({ theme }) => theme.OpenSans};
//     font-weight: 300;
//     letter-spacing: 0;
//     color: #3C3C3C;
//     text-transform: ${({ texttransform }) => texttransform ? texttransform : "none"};
//     text-decoration: none;
// `;

const redirectLogin = () => {
    console.log('redirect');

}

const Welcome = () => {
    return (
        <StyledWelcomeWrapper>
            <StyledWelcomeLeft />
            <StyledWelcomeRight>
                <StyledRightWrapper>
                    <StyledWelcomeTitle>
                        Zacznij pomagać!<br /> Oddaj niechciane rzeczy w zaufane ręce
                    </StyledWelcomeTitle>
                    <StyledButtonsWrapper>
                        <NavLink to='/logowanie'>
                            <Button texttransform="uppercase" onClick={redirectLogin}>
                                Oddaj rzeczy
                            </Button>
                        </NavLink>
                        <NavLink to='/logowanie'>
                            <Button texttransform="uppercase">
                                Zorganizuj zbiórkę
                            </Button>
                        </NavLink>
                    </StyledButtonsWrapper>
                </StyledRightWrapper>
            </StyledWelcomeRight>
        </StyledWelcomeWrapper>
    )
}

export default Welcome;
