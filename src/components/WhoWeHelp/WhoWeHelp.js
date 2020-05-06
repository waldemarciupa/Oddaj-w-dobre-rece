import React, { useState } from 'react';
import styled from 'styled-components';
import Decoration from '../Decoration';
import Button from '../Button';
import FoundationsContainer from './FoundationsContainer';
import MoviesForm from '../../redux/foundations/duck/FoundationsForm';
import OrganizationsContainer from './OrganizationsContainer';

const StyledWhoWeHelpContainer = styled.div`
    max-width: 1344px;
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
    margin-bottom: 50px;
`;

const StyledNavigation = styled.div`
    width: 800px;
    display: flex;
    justify-content: space-around;
    margin-top: 50px;
`;

const StyledButton = styled(Button)`
    width: 208px;
    height: 79px;
    font-size: 24px;
    line-height: 24px;
`;

const StyledContent = styled.div`
    width: 1344px;
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
    margin: 70px auto 50px;
`;

const StyledList = styled.div`
    width: 100%;
    height: 100%;
`;


const WhoWeHelp = () => {

    const [route, setRoute] = useState('foundations');

    const changeRouteToFoundations = () => {
        setRoute('foundations');
    }

    const changeRouteToOrganizations = () => {
        setRoute('organizations');
    }

    const changeRouteToLocals = () => {
        setRoute('locals');
    }

    return (
        <StyledWhoWeHelpContainer>
            <MoviesForm />
            <StyledTitle>
                Komu pomagamy?
            </StyledTitle>
            <Decoration />
            <StyledNavigation>
                <StyledButton onClick={changeRouteToFoundations} >
                    Fundacjom
                </StyledButton>
                <StyledButton onClick={changeRouteToOrganizations} >
                    Organizacjom pozarządowym
                </StyledButton>
                <StyledButton onClick={changeRouteToLocals} >
                    Lokalnym zbiórkom
                </StyledButton>
            </StyledNavigation>
            <StyledContent>
                <StyledContentTitle>
                    W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
                </StyledContentTitle>
                <StyledList>
                    <FoundationsContainer />}
                </StyledList>
            </StyledContent>
        </StyledWhoWeHelpContainer>
    )
}

export default WhoWeHelp;
