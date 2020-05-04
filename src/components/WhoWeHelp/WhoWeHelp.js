import React from 'react';
import styled from 'styled-components';
import Decoration from '../Decoration';
import Button from '../Button';

const StyledWhoWeHelpContainer = styled.div`
    max-width: 1344px;
    height: 80vh;
    margin: 30px auto 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const StyledTitle = styled.div`
    font-size: 38px;
    line-height: 55px;
    letter-spacing: -0.76px;
    font-weight: 400;
`;

const StyledNavigation = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-around;
`;

const StyledButton = styled(Button)`
    width: 208px;
    height: 79px;
    font-size: 24px;
    line-height: 24px;
`;

const StyledContent = styled.div`
    max-width: 1344px;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const StyledContentTitle = styled.h3`
    font-size: 22px;
    line-height: 30px;
    width: 640px;
    text-align: center;
`;

const StyledList = styled.div``;

const StyledListElement = styled.div`
    display: flex;
`;

const StyledPagination = styled.div``;

const WhoWeHelp = () => {
    return (
        <StyledWhoWeHelpContainer>
            <StyledTitle>
                Komu pomagamy?
            </StyledTitle>
            <Decoration />
            <StyledNavigation>
                <StyledButton>
                    Fundacjom
                </StyledButton>
                <StyledButton>
                    Organizacjom pozarządowym
                </StyledButton>
                <StyledButton>
                    Lokalnym zbiórkom
                </StyledButton>
            </StyledNavigation>
            <StyledContent>
                <StyledContentTitle>
                    W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
                </StyledContentTitle>
                <StyledList>
                    <li>
                        <StyledListElement>
                            <div>
                                <p>Fundacja “Dbam o Zdrowie”</p>
                                <p>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
                            </div>
                            <div>
                                <p>ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
                            </div>
                        </StyledListElement>
                    </li>
                    <li>
                        <StyledListElement>
                            <div>
                                <p>Fundacja “Dbam o Zdrowie”</p>
                                <p>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
                            </div>
                            <div>
                                <p>ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
                            </div>
                        </StyledListElement>
                    </li>
                    <li>
                        <StyledListElement>
                            <div>
                                <p>Fundacja “Dbam o Zdrowie”</p>
                                <p>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
                            </div>
                            <div>
                                <p>ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
                            </div>
                        </StyledListElement>
                    </li>
                </StyledList>
                <StyledPagination>
                    <StyledListElement>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                    </StyledListElement>
                </StyledPagination>
            </StyledContent>
        </StyledWhoWeHelpContainer>
    )
}

export default WhoWeHelp;