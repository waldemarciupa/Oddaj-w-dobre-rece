import styled from 'styled-components';

const WelcomeLeft = styled.div`
    width: 100%;
    background-image: url(${props => props.inputBackground || "white"});
    background-size: cover;
    background-position: right;
`;

export default WelcomeLeft;
