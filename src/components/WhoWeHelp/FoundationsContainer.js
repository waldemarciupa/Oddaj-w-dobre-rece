import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getAllFoundations, clear } from '../../redux/foundations/duck/operations';
import Pagination from './Pagination';

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

const FoundationsContainer = ({ foundations, getAllFoundations, clear }) => {

    // const [foundations, setFoundations] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [foundationPerPage] = useState(3);

    useEffect(() => {
        getAllFoundations();
        return () => clear()
    }, [])

    // Get current foundations
    const indexOfLastFoundation = currentPage * foundationPerPage;
    const indexOfFirstFoundation = indexOfLastFoundation - foundationPerPage;
    const currentFoundations = foundations.list.slice(indexOfFirstFoundation, indexOfLastFoundation);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            <ul>
                {currentFoundations.map(({ name, mission, things }, i) => <StyledListElement key={i}>
                    <StyledListElementLeft>
                        <StyledName>
                            {name}
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
            <Pagination foundationPerPage={foundationPerPage} totalFoundations={foundations.list.length} paginate={paginate} />
        </>
    )

}

const mapStateToProps = ({ foundations }) => ({ foundations })

const mapDispatchToProps = (dispatch) => ({
    getAllFoundations: () => dispatch(getAllFoundations("organizations")),
    clear: () => dispatch(clear())
})

export default connect(mapStateToProps, mapDispatchToProps)(FoundationsContainer)