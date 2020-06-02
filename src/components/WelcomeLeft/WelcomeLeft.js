import React from 'react';
import styled from 'styled-components';
import homeHeroImage from '../../assets/Home-Hero-Image.jpg';

const StyledWelcomeLeft = styled.div`
    width: 100%;
    background-image: url(${props => props.inputBackground || "palevioletred"});
    background-size: cover;
    background-position: right;
`;


const WelcomeLeft = () => {
    return (
        <StyledWelcomeLeft inputBackground={homeHeroImage} />
    )
};

export default WelcomeLeft;
