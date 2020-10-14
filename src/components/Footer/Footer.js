import React from 'react';
import styled from 'styled-components';
import instagram from '../../assets/Instagram.svg';
import facebook from '../../assets/Facebook.svg';

const StyledFooter = styled.footer`
    width: 100%;
    height: 50px;
    margin-top: 20px;
    padding: 0 20px;
    text-align: center;
    position: relative;
`;

const StyledParagraph = styled.p`
    font-size: 18px;
    line-height: 24px;
`;

const StyledLinksWrapper = styled.div`
    width: 200px;
    height: 50px;
    position: absolute;
    right: 0;
    top: 0;

    @media (max-width: 540px) {
        display: none;
    }
`;

const StyledLink = styled.a`
    margin: 10px;
`;

const StyledLinkIcon = styled.img`
    
`;


const Footer = () => {
    return (
        <StyledFooter>
            <StyledParagraph>
                Copyright by Coders Lab
            </StyledParagraph>
            <StyledLinksWrapper>
                <StyledLink href="#">
                    <StyledLinkIcon src={facebook} alt="facebook" />
                </StyledLink>
                <StyledLink href="#">
                    <StyledLinkIcon src={instagram} alt="instagram" />
                </StyledLink>
            </StyledLinksWrapper>
        </StyledFooter>
    )
}

export default Footer;
