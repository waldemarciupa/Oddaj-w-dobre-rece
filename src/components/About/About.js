import React from 'react';
import styled from 'styled-components';
import people from '../../assets/People.jpg';
import signature from '../../assets/Signature.svg';
import Decoration from '../Decoration';

const StyledAbout = styled.div`
    width: 100%;
    min-height: 100vh;
    margin-top: 80px;
    display: flex;

    @media (max-width: 992px) {
        flex-direction: column;
    }
`;

const StyledAboutContent = styled.div`
    width: 50%;
    height: auto;
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    @media (max-width: 992px) {
        width: 100%;
    }
`;

const StyledAboutContentWrapper = styled.div`
    width: 655px;
    height: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    position: relative;
    margin: 0 20px;

    @media (max-width: 992px) {
        min-height: 600px;
    }
`;

const StyledAboutTitle = styled.h3`
    font-size: 38px;
    line-height: 55px;
    letter-spacing: -0.76px;
`

const StyledAboutText = styled.p`
    font-size: 30px;
    line-height: 54px;
    letter-spacing: -0.6px;

    @media (max-width: 992px) {
        font-size: 24px;
        line-height: 44px;
        letter-spacing: -0.6px;
    }
`;

const StyledSignature = styled.img`
    position: absolute;
    bottom: 0;
    right: 0;

    @media (max-width: 992px) {
        margin: 20px 30px 20px 0;
    }
`;

const StyledAboutImage = styled.div`
    width: 50%;
    background-image: url(${people});
    background-size: cover;
    background-position: center;

    @media (max-width: 992px) {
        width: 100%;
        height: 500px;
    }
`;

const About = () => {
    return (
        <StyledAbout>
            <StyledAboutContent>
                <StyledAboutContentWrapper>
                    <StyledAboutTitle>
                        O nas
                    </StyledAboutTitle>
                    <Decoration />
                    <StyledAboutText>
                        Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.
                    </StyledAboutText>
                    <div style={{ height: "150px" }}>
                        <StyledSignature src={signature} alt="signature" />
                    </div>
                </StyledAboutContentWrapper>
            </StyledAboutContent>
            <StyledAboutImage />
        </StyledAbout>
    )
}

export default About;
