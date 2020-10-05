import styled from 'styled-components';

const Button = styled.button`
    border: 0.75px solid #3C3C3C;
    width: 310px;
    height: 120px;
    cursor: pointer;
    font-size: 36px;
    line-height: 45px;
    text-align: center;
    font-family: ${({ theme }) => theme.OpenSans};
    font-weight: 300;
    letter-spacing: 0;
    color: #3C3C3C;
    text-transform: ${({ texttransform }) => texttransform ? texttransform : "none"};

     @media (max-width: 1200px) {
        width: 240px;
        height: 80px;
        font-size: 28px;
        line-height: 30px;
    }
`;

export default Button;