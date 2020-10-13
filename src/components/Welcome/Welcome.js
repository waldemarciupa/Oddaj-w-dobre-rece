import React from 'react';
import styled from 'styled-components';
import decoration from '../../assets/Decoration.svg';
import Button from '../Button';
import { NavLink } from 'react-router-dom';
import homeHeroImage from '../../assets/Home-Hero-Image.jpg';
import { connect } from 'react-redux';

const StyledWelcomeWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
`;

const StyledWelcomeWrapperBackground = styled.div`
    display: none;

    @media (max-width: 776px) {
        display: block;
        width: 100%;
        height: 50%;
        background-image: url(${props => props.inputBackground || "white"});
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        z-index: -1;
        position: absolute;
        bottom: 0;
        left: 0;
        /* transform: translate(-50%,-50%); */
    }
`

const StyledWelcomeLeft = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${props => props.inputBackground || "white"});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;

    @media (max-width: 776px) {
        display: none;
    }
`;

const StyledWelcomeRight = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;


    /* @media (max-width: 992px) {
        background-image: url(${props => props.inputBackground || "white"});
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    } */
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

    @media (max-width: 1200px) {
        margin-top: 100px;
        width: 100%;
    }
`;

const StyledWelcomeTitle = styled.h1`
    font-size: 38px;
    font-weight: 400;
    line-height: 55px;
    letter-spacing: -0.76px;

    @media (max-width: 1200px) {
        font-size: 28px;
        line-height: 45px;
    }
`;

const StyledButtonsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Welcome = (currentUser) => {
    return (
        <StyledWelcomeWrapper  >
            <StyledWelcomeLeft inputBackground={homeHeroImage} />
            <StyledWelcomeRight inputBackground={homeHeroImage}>
                <StyledRightWrapper>
                    <StyledWelcomeWrapperBackground inputBackground={homeHeroImage} />
                    <StyledWelcomeTitle>
                        Zacznij pomagać!<br /> Oddaj niechciane rzeczy w zaufane ręce
                    </StyledWelcomeTitle>
                    <StyledButtonsWrapper>
                        {
                            currentUser.currentUser ?
                                <>
                                    <NavLink to='/oddaj-rzeczy/'>
                                        <Button texttransform="uppercase">
                                            Oddaj rzeczy
                                        </Button>
                                    </NavLink>
                                    <NavLink to='/oddaj-rzeczy/'>
                                        <Button texttransform="uppercase">
                                            Zorganizuj zbiórkę
                                        </Button>
                                    </NavLink>
                                </> : <>
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
                                </>
                        }
                    </StyledButtonsWrapper>
                </StyledRightWrapper>
            </StyledWelcomeRight>
        </StyledWelcomeWrapper>
    )
}

const mapStateToProps = ({ user }) => {
    return {
        currentUser: user.currentUser
    }
}

export default connect(mapStateToProps)(Welcome);
