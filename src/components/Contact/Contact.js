import React from 'react';
import styled from 'styled-components';
import background from '../../assets/Background-Contact-Form.jpg'
import Decoration from '../Decoration';
import Button from '../Button';

const StyledContact = styled.div`
    margin-top: 30px;
    width: 100%;
    height: 100vh;
    background-image: url(${background});
    background-size: cover;
    background-position: center;
    position: relative;
`;

const StyledFormWrapper = styled.div`
    width: 50vw;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledFormContent = styled.div`
    width: 80%;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

const StyledTitle = styled.div`
    font-size: 38px;
    line-height: 55px;
    letter-spacing: -0.76px;
    font-weight: 400;
`;

const StyledForm = styled.form`
    position: relative;
`;

const StyledFormTopInputs = styled.div`
    display: flex;
    justify-content: space-between;
`;

const StyledFormName = styled.div`
    padding-right: 7px;
`;

const StyledFormEmail = styled.div`
    padding-left: 7px;
`;

const StyledLabel = styled.label`
    font-size: 16px;
    line-height: 55px;
    font-weight: 600;
`;

const StyledTextarea = styled.textarea`
    width: 100%;
    resize: none;
    border: none;
    border-bottom: 1px solid #707070;
    background: transparent;
    color: #272727;
    font-family: ${({ theme }) => theme.OpenSans};
    font-size: 16px;
    margin-bottom: 100px;
`;

const StyledInput = styled.input`
    border: none;
    border-bottom: 1px solid #707070;
    background: transparent;
    font-size: 16px;
    color: #272727;
    font-family: ${({ theme }) => theme.OpenSans};
`;

const StyledButton = styled(Button)`
    width: 150px;
    height: 50px;
    font-family: ${({ theme }) => theme.OpenSans};
    font-weight: 300;
    font-size: 16px;
    line-height: 32px;
    position: absolute;
    bottom: 0;
    right: 0;
`;


const Contact = () => {
    return (
        <StyledContact>
            <StyledFormWrapper>
                <StyledFormContent>
                    <StyledTitle>
                        Skontaktuj się z nami
                    </StyledTitle>
                    <Decoration />
                    <StyledForm>
                        <StyledFormTopInputs>
                            <StyledFormName>
                                <StyledLabel>Wpisz swoje imię</StyledLabel><br />
                                <StyledInput />
                            </StyledFormName>

                            <StyledFormEmail>
                                <StyledLabel>Wpisz swój email</StyledLabel><br />
                                <StyledInput />
                            </StyledFormEmail>
                        </StyledFormTopInputs>
                        <StyledLabel>Wpisz swoją wiadomość</StyledLabel><br />
                        <StyledTextarea rows="5" />
                        <StyledButton>
                            Wyślij
                        </StyledButton>
                    </StyledForm>
                </StyledFormContent>
            </StyledFormWrapper>
        </StyledContact>
    )
}

export default Contact;