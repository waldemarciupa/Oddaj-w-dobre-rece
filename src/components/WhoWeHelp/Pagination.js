import React from 'react';

const Pagination = ({ foundationPerPage, totalFoundations, paginate }) => {
    const foundationNumbers = [];

    for (let i = 1; i <= Math.ceil(totalFoundations / foundationPerPage); i++) {
        foundationNumbers.push(i);
    }

    return (
        <nav>
            <ul>
                {
                    foundationNumbers.map(number => (
                        <li key={number}>
                            <a href="!#" onClick={(e) => {
                                e.preventDefault()
                                paginate(number)
                            }} >
                                {number}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}

export default Pagination;