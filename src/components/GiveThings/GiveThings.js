import React from 'react';
import styled from 'styled-components';
import decoration from '../../assets/Decoration.svg';
import Button from '../Button';
import WelcomeLeft from '../WelcomeLeft/WelcomeLeft';
import formHeroImage from '../../assets/Form-Hero-Image.jpg';

const StyledFormContainer = styled.div`
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
    padding-bottom: 50px;

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

const StyledFormLead = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    position: relative;
    font-size: 36px;
    font-weight: 300;
`;

const StyledFormLeadContainer = styled.div`
    display: flex;
    position: absolute;
    bottom: -250px;
    left: 50%;
    transform: translate(-50%, 0);
`;

const StyledFormLeadItem = styled.div`
    position: relative;
    width: 120px;
    font-size: 18px;
    margin-left: 20px;

    p:first-child {
        font-size: 22px;
        font-weight: 400;
    }

    &::before {
        content: '';
        width: 120px;
        height: 120px;
        border: 1px solid #3C3C3C;
        position: absolute;
        top: 0;
        left: 0;
        transform: translate(0, -10%) rotate(45deg);
    }
`;

const GiveThings = () => {
    return (
        <StyledFormContainer>
            <WelcomeLeft inputBackground={formHeroImage} />
            <StyledWelcomeRight>
                <StyledRightWrapper>
                    <StyledWelcomeTitle>
                        Oddaj rzeczy, których już nie chcesz POTRZEBUJĄCYM
                    </StyledWelcomeTitle>
                    <StyledFormLead>
                        <p>Wystarczą 4 proste kroki:</p>
                        <StyledFormLeadContainer>
                            <StyledFormLeadItem><p>1</p><p>Wybierz<br /> rzeczy</p></StyledFormLeadItem>
                            <StyledFormLeadItem><p>2</p><p>Spakuj je w worki</p></StyledFormLeadItem>
                            <StyledFormLeadItem><p>3</p><p>Wybierz fundację</p></StyledFormLeadItem>
                            <StyledFormLeadItem><p>4</p><p>Zamów kuriera</p></StyledFormLeadItem>
                        </StyledFormLeadContainer>
                    </StyledFormLead>
                </StyledRightWrapper>
            </StyledWelcomeRight>
        </StyledFormContainer >
    )
};

export default GiveThings;