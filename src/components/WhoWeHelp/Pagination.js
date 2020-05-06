import React from 'react';
import styled from 'styled-components';

const StyledNav = styled.nav`
    width: 150px;
    height: 50px;
    margin: 65px auto 0;
`;

const StyledNavList = styled.ul`
    display: flex;
`;

const StyledNavListElement = styled.li`

`;

const StyledNavListLink = styled.a`
    text-decoration: none;
    font-size: 18px;
    line-height: 24px;
    color: #3C3C3C;
    padding: 0 10px;
`



const Pagination = ({ foundationPerPage, totalFoundations, paginate }) => {
    const foundationNumbers = [];

    for (let i = 1; i <= Math.ceil(totalFoundations / foundationPerPage); i++) {
        foundationNumbers.push(i);
    }

    return (
        <StyledNav>
            <StyledNavList>
                {
                    foundationNumbers.map(number => (
                        <StyledNavListElement key={number}>
                            <StyledNavListLink href="!#" onClick={(e) => {
                                e.preventDefault()
                                paginate(number)
                            }} >
                                {number}
                            </StyledNavListLink>
                        </StyledNavListElement>
                    ))
                }
            </StyledNavList>
        </StyledNav>
    )
}

export default Pagination;