import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Decoration from '../Decoration';
import Button from '../Button';
// import FoundationsContainer from './FoundationsContainer';
import { getAllData, getCurrentFundation } from '../../redux/foundations/operations';
import Pagination from './Pagination';
import { connect } from 'react-redux';

const StyledWhoWeHelpContainer = styled.div`
    max-width: 1344px;
    margin: 30px auto 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1366px) {
        margin: 30px 10px 0 10px;
    }
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

    @media (max-width: 992px) {
        flex-direction: column;
        align-items: center;
    }
`;

const StyledButton = styled(Button)`
    width: 208px;
    height: 79px;
    font-size: 24px;
    line-height: 24px;

    @media (max-width: 992px) {
        margin-top: 10px;
    }
`;

const StyledContent = styled.div`
    width: 100%;
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

// FoundationsContainer

const StyledFoundationsContainer = styled.div`
`;

const StyledListElement = styled.li`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 0;
    border-bottom: 1px solid #707070;
`;

const StyledListElementLeft = styled.div`

`;

const StyledName = styled.p`
    font-size: 24px;
    line-height: 29px;
    font-family: ${({ theme }) => theme.Merriweather};
    font-weight: 300;
    margin-bottom: 5px;
`;

const StyledMission = styled.p`
    font-size: 16px;
    line-height: 20px;
    font-family: ${({ theme }) => theme.Merriweather};
    font-weight: 300;
    font-style: italic;
`;

const StyledThings = styled.p`
    font-size: 16px;
    line-height: 20px;
    font-family: ${({ theme }) => theme.Merriweather};
    font-weight: 300;
`;

const WhoWeHelp = ({ current, getAllData, clear, getThingsFromState }) => {

    // States for pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [foundationPerPage] = useState(3);

    useEffect(() => {
        getAllData();
        // return () => clear()
    }, [])

    const handleClickFound = () => {
        getThingsFromState("foundation");
        setCurrentPage(1);
    }

    const handleClickORG = () => {
        getThingsFromState("organizations");
        setCurrentPage(1);
    }

    const handleClickLocals = () => {
        getThingsFromState("locals");
        setCurrentPage(1);
    }

    // Get current foundations
    const indexOfLastFoundation = currentPage * foundationPerPage;
    const indexOfFirstFoundation = indexOfLastFoundation - foundationPerPage;
    const currentFoundations = current?.items?.slice(indexOfFirstFoundation, indexOfLastFoundation) || [];

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <StyledWhoWeHelpContainer>
            {/* <MoviesForm /> */}
            <StyledTitle>
                Komu pomagamy?
            </StyledTitle>
            <Decoration />
            <StyledNavigation>
                <StyledButton onClick={handleClickFound}>
                    Fundacjom
                </StyledButton >
                <StyledButton onClick={handleClickORG}>
                    Organizacjom pozarządowym
                </StyledButton>
                <StyledButton onClick={handleClickLocals}>
                    Lokalnym zbiórkom
                </StyledButton>
            </StyledNavigation>
            <StyledContent>
                <StyledContentTitle>
                    {current?.desc}
                </StyledContentTitle>
                <StyledList>
                    <StyledFoundationsContainer>
                        <ul>
                            {currentFoundations.map(({ header, mission, things }, i) => <StyledListElement key={i}>
                                <StyledListElementLeft>
                                    <StyledName>
                                        {header}
                                    </StyledName>
                                    <StyledMission>
                                        Cel i misja: {mission}
                                    </StyledMission>
                                </StyledListElementLeft>
                                <StyledThings>
                                    {things}
                                </StyledThings>
                            </StyledListElement>
                            )}
                        </ul>
                        <Pagination foundationPerPage={foundationPerPage} totalFoundations={current?.items?.length} paginate={paginate} />
                    </StyledFoundationsContainer>
                </StyledList>
            </StyledContent>
        </StyledWhoWeHelpContainer>
    )
}

const mapStateToProps = ({ foundations }) => ({ current: foundations.current })

const mapDispatchToProps = (dispatch) => ({
    getAllData: () => dispatch(getAllData()),
    // clear: () => dispatch(clear()),
    getThingsFromState: fundation => dispatch(getCurrentFundation(fundation))
})

export default connect(mapStateToProps, mapDispatchToProps)(WhoWeHelp)