import React from 'react';
import styled from 'styled-components';
import decoration from '../../assets/Decoration.svg';
import Button from '../Button';
import { NavLink } from 'react-router-dom';
import WelcomeLeft from '../WelcomeLeft/WelcomeLeft';
import homeHeroImage from '../../assets/Home-Hero-Image.jpg';

const StyledWelcomeWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
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

const Welcome = () => {
    return (
        <StyledWelcomeWrapper >
            <WelcomeLeft inputBackground={homeHeroImage} />
            <StyledWelcomeRight>
                <StyledRightWrapper>
                    <StyledWelcomeTitle>
                        Zacznij pomagać!<br /> Oddaj niechciane rzeczy w zaufane ręce
                    </StyledWelcomeTitle>
                    <StyledButtonsWrapper>
                        <NavLink to='/logowanie'>
                            <Button texttransform="uppercase">
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
