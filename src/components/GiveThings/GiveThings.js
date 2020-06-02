import React from 'react';
import styled from 'styled-components';
import Welcome from '../Welcome/Welcome';
import formHeroImage from '../../assets/Form-Hero-Image.jpg';
import decoration from '../../assets/Decoration.svg';
import Button from '../Button';

const StyledFormContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
`;

export const StyledWelcomeLeft = styled.div`
    width: 100%;
    background-image: url(${formHeroImage});
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

const GiveThings = () => {
    return (
        <StyledFormContainer>
            <StyledWelcomeLeft />
            <StyledWelcomeRight>
                <StyledRightWrapper>
                    <StyledWelcomeTitle>
                        Oddaj rzeczy, których już nie chcesz POTRZEBUJĄCYM
                    </StyledWelcomeTitle>
                </StyledRightWrapper>
            </StyledWelcomeRight>
        </StyledFormContainer >
    )
};

export default GiveThings;