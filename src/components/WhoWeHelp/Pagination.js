import React from 'react';
import styled from 'styled-components';

const StyledNav = styled.nav`
    width: 100%;
    height: 50px;
    margin: 65px auto 0;
`;

const StyledNavList = styled.ul`
    display: flex;
    justify-content: center;
`;

const StyledNavListElement = styled.li`
    border: 1px solid transparent;
    
    &:hover {
        background: #ddd;
    }
    &:active {
        border: 1px solid #707070;
        color: red;
    }
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
                                {foundationNumbers.length > 1 && number}
                            </StyledNavListLink>
                        </StyledNavListElement>
                    ))
                }
            </StyledNavList>
        </StyledNav>
    )
}

export default Pagination;