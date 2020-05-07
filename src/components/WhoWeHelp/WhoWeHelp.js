import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Decoration from '../Decoration';
import Button from '../Button';
// import FoundationsContainer from './FoundationsContainer';
import { getAllData, clear } from '../../redux/foundations/duck/operations';
import Pagination from './Pagination';
import { connect } from 'react-redux';

// import MoviesForm from '../../redux/foundations/duck/FoundationsForm';

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

const WhoWeHelp = ({ foundations, getAllData, clear }) => {

    // States for pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [foundationPerPage] = useState(3);

    // initial state
    const [state, setState] = useState({
        "name": "foundation",
        "desc": "W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.",
        "items": [
            {
                "header": "1Fundacja “Dbam o Zdrowie”",
                "mission": "Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
                "things": "ubrania, jedzenie, sprzęt AGD, meble, zabawki"
            },
            {
                "header": "2Fundacja “Dla dzieci””",
                "mission": "Pomoc dzieciom z ubogich rodzin.",
                "things": "ubrania, meble, zabawki"
            },
            {
                "header": "3Fundacja “Bez domu””",
                "mission": "Pomoc dla osób nie posiadających miejsca zamieszkania.",
                "things": "ubrania, jedzenie, ciepłe koce"
            },
            {
                "header": "4Fundacja “Dla dzieci””",
                "mission": "Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
                "things": "ubrania, jedzenie, sprzęt AGD, meble, zabawki"
            },
            {
                "header": "5Fundacja “Dbam o Zdrowie”",
                "mission": "Pomoc dzieciom z ubogich rodzin.",
                "things": "ubrania, meble, zabawki"
            },
            {
                "header": "6Fundacja “Dla dzieci””",
                "mission": "Pomoc dla osób nie posiadających miejsca zamieszkania.",
                "things": "ubrania, jedzenie, ciepłe koce"
            },
            {
                "header": "7Fundacja “Bez domu””",
                "mission": "Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
                "things": "ubrania, jedzenie, sprzęt AGD, meble, zabawki"
            },
            {
                "header": "8Fundacja “Dla dzieci””",
                "mission": "Pomoc dzieciom z ubogich rodzin.",
                "things": "ubrania, meble, zabawki"
            },
            {
                "header": "9Fundacja “Bez domu””",
                "mission": "Pomoc dla osób nie posiadających miejsca zamieszkania.",
                "things": "ubrania, jedzenie, ciepłe koce"
            }
        ]
    });

    const getThingsFromState = (organizations) => {

        let [foundationsData] = foundations.list.filter((foundation) => {
            return foundation.name === organizations;
        });

        console.log(foundationsData)

        setState(foundationsData);
    }

    useEffect(() => {
        getAllData();
        return () => clear()
    }, [])

    const handleClickFound = () => {
        console.log('click');
        getThingsFromState("foundation");
    }

    const handleClickORG = () => {
        console.log('click');
        getThingsFromState("organizations");
    }

    const handleClickLocals = () => {
        console.log('click');
        getThingsFromState("locals");
    }

    // Get current foundations
    const indexOfLastFoundation = currentPage * foundationPerPage;
    const indexOfFirstFoundation = indexOfLastFoundation - foundationPerPage;
    const currentFoundations = state.items.slice(indexOfFirstFoundation, indexOfLastFoundation);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    console.log(foundations)

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
                    {state.desc}
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
                        <Pagination foundationPerPage={foundationPerPage} totalFoundations={state.items.length} paginate={paginate} />
                    </StyledFoundationsContainer>
                </StyledList>
            </StyledContent>
        </StyledWhoWeHelpContainer>
    )
}

const mapStateToProps = ({ foundations }) => ({ foundations })

const mapDispatchToProps = (dispatch) => ({
    getAllData: () => dispatch(getAllData()),
    clear: () => dispatch(clear())
})

export default connect(mapStateToProps, mapDispatchToProps)(WhoWeHelp)