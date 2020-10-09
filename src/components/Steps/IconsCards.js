import React from 'react';
import styled from 'styled-components';
import icon1 from '../../assets/Icon-1.svg';
import icon2 from '../../assets/Icon-2.svg';
import icon3 from '../../assets/Icon-3.svg';
import icon4 from '../../assets/Icon-4.svg';

const StyledIconsWrapper = styled.div`
    width: 100%;
    min-height: 325px;
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media (max-width: 668px) {
        flex-direction: column;
        margin: 20px 0 20px 0;
    }
`;

const StyledIconCard = styled.div`
    width: 164px;
    height: 190px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;

    @media (max-width: 668px) {
        margin: 10px 0 10px 0;
    }
`;

const StyledIcon = styled.img`
    width: 83px;
    height: 83px;
`;

const StyledTitle = styled.h3`
    font-size: 18px;
    line-height: 24px;
    font-weight: 400;
`;

const StyledSpan = styled.span`
    display: block;
    width: 85px;
    border: 1px solid #707070;
`;

const Styledtext = styled.h4`
    font-size: 16px;
    font-weight: 400;
`;

const IconsCards = () => {
    return (
        <StyledIconsWrapper>
            <StyledIconCard>
                <StyledIcon src={icon1} />
                <StyledTitle>
                    Wybierz rzeczy
                </StyledTitle>
                <StyledSpan />
                <Styledtext>
                    ubrania, zabawki, sprzęt i inne

                </Styledtext>
            </StyledIconCard>
            <StyledIconCard>
                <StyledIcon src={icon2} />
                <StyledTitle>
                    Spakuj je
                </StyledTitle>
                <StyledSpan />
                <Styledtext>
                    skorzystaj z worków na śmieci
                </Styledtext>
            </StyledIconCard>
            <StyledIconCard>
                <StyledIcon src={icon3} />
                <StyledTitle>
                    Zdecyduj komu chcesz pomóc
                </StyledTitle>
                <StyledSpan />
                <Styledtext>
                    wybierz zaufane miejsce

                </Styledtext>
            </StyledIconCard>
            <StyledIconCard>
                <StyledIcon src={icon4} />
                <StyledTitle>
                    Zamów kuriera
                </StyledTitle>
                <StyledSpan />
                <Styledtext>
                    kurier przyjedzie w dogodnym terminie
                </Styledtext>
            </StyledIconCard>
        </StyledIconsWrapper >
    )
}

export default IconsCards;