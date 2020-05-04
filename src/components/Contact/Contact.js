import React from 'react';
import styled from 'styled-components';
import background from '../../assets/Background-Contact-Form.jpg'
import Decoration from '../Decoration';

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
    border: 1px solid black;
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
    border: 1px solid red;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`;

const StyledTitle = styled.div`
    font-size: 38px;
    line-height: 55px;
    letter-spacing: -0.76px;
    font-weight: 400;
`;

const StyledForm = styled.form``;

const StyledFormTopInputs = styled.div`
    display: flex;
    justify-content: space-between;
`;

const StyledFormName = styled.div``;

const StyledFormEmail = styled.div``;


const Contact = () => {
    return (
        <StyledContact>
            <StyledFormWrapper>
                <StyledFormContent>
                    <StyledTitle>
                        Wystarczą 4 proste kroki
                    </StyledTitle>
                    <Decoration />
                    <StyledForm>
                        <StyledFormTopInputs>
                            <StyledFormName>
                                <label>Wpisz swoje imię</label><br />
                                <input />
                            </StyledFormName>
                            <StyledFormEmail>
                                <label>Wpisz swój email</label><br />
                                <input />
                            </StyledFormEmail>
                        </StyledFormTopInputs>
                        <label>Wpisz swoją wiadomość</label><br />
                        <textarea />
                        <button>Wyślij</button>
                    </StyledForm>
                </StyledFormContent>
            </StyledFormWrapper>
        </StyledContact>
    )
}

export default Contact;