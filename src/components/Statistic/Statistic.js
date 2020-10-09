import React from 'react';
import styled from 'styled-components';
import ThreeColumnImage from '../../assets/3ColumnsBackground.png';


const StyledStatistic = styled.div`
    width: 100%;
    min-height: 384px;
    background-image: url(${ThreeColumnImage});
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    @media (max-width: 668px) {
        flex-direction: column;
    }
`;

const StyledColumn = styled.div`
    width: 334px;
    height: 252px;
    text-align: center;
`;

const StyledNumber = styled.h2`
    font-size: 90px;
    line-height: 122px;
    font-weight: 300;
    color: #5E5322;
`;

const StyledTitle = styled.h3`
    color: #3C3C3C;
    font-size: 18px;
    line-height: 30px;
    letter-spacing: -0.36px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 10px;
`;

const StyledText = styled.p`
    color: #3C3C3C;
    font-size: 16px;
    line-height: 18px;
    letter-spacing: -0.32px;
    font-family: ${({ theme }) => theme.Merriweather};
    font-weight: 300;
`;

const Statistic = () => {
    return (
        <StyledStatistic>
            <StyledColumn>
                <StyledNumber>10</StyledNumber>
                <StyledTitle>Oddanych worków</StyledTitle>
                <StyledText>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</StyledText>
            </StyledColumn>
            <StyledColumn>
                <StyledNumber>5</StyledNumber>
                <StyledTitle>Wspartych organizacji</StyledTitle>
                <StyledText>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</StyledText>
            </StyledColumn>
            <StyledColumn>
                <StyledNumber>7</StyledNumber>
                <StyledTitle>Zorganizowanych zbiórek</StyledTitle>
                <StyledText>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</StyledText>
            </StyledColumn>
        </StyledStatistic>
    )
}

export default Statistic;
