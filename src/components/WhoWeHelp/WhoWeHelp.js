import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Decoration from '../Decoration';
import Button from '../Button';
import Foundations from './Foundations';
import Pagination from './Pagination';
import FoundationsContainer from './FoundationsContainer';
import MoviesForm from '../../redux/foundations/duck/FoundationsForm';

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
`;

const StyledNavigation = styled.div`
    width: 800px;
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
`;

const StyledList = styled.div`
    width: 100%;
    height: 100%;
`;


const WhoWeHelp = () => {

    // const [foundations, setFoundations] = useState([]);
    // const [currentPage, setCurrentPage] = useState(1);
    // const [foundationPerPage] = useState(3);

    // useEffect(() => {

    //     const fetchFoundations = async () => {
    //         const res = await axios.get('http://localhost:3000/foundations');
    //         setFoundations(res.data);
    //     }

    //     fetchFoundations();

    // }, [])

    // // Get current foundations
    // const indexOfLastFoundation = currentPage * foundationPerPage;
    // const indexOfFirstFoundation = indexOfLastFoundation - foundationPerPage;
    // const currentFoundations = foundations.slice(indexOfFirstFoundation, indexOfLastFoundation);

    // // Change page
    // const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <StyledWhoWeHelpContainer>
            <MoviesForm />
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
                    <FoundationsContainer />
                    {/* <Foundations foundations={currentFoundations} /> */}
                    {/* <Pagination foundationPerPage={foundationPerPage} totalFoundations={foundations.length} paginate={paginate} /> */}
                </StyledList>
            </StyledContent>
        </StyledWhoWeHelpContainer>
    )
}

export default WhoWeHelp;
