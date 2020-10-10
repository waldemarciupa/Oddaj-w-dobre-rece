import React from 'react';
import styled from 'styled-components';
import background from '../../assets/Background-Contact-Form.jpg'
import Decoration from '../Decoration';
import Button from '../Button';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const StyledContact = styled.div`
    margin-top: 30px;
    width: 100%;
    height: 100vh;
    background-image: url(${background});
    background-size: cover;
    background-position: center;
    position: relative;

    @media (max-width: 992px) {
        background: transparent;
    }
`;

const StyledFormWrapper = styled.div`
    min-width: 50vw;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    
    @media (max-width: 992px) {
        width: 100%;
    }
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

const StyledForm = styled(Form)`
    position: relative;
`;

const StyledFormTopInputs = styled.div`
    display: flex;
    justify-content: space-between;
`;

const StyledFormName = styled.div`
    margin-right: 7px;
    position: relative;
`;

const StyledFormEmail = styled.div`
    margin-left: 7px;
    position: relative;
`;

const StyledFormMessage = styled.div`
    position: relative;
`;

const StyledLabel = styled.label`
    font-size: 16px;
    line-height: 55px;
    font-weight: 600;
`;

const StyledField = styled(Field)`
    border: none;
    border-bottom: 1px solid #707070;
    background: transparent;
    font-size: 16px;
    color: #272727;
    font-family: ${({ theme }) => theme.OpenSans};
    font-weight: 700;
`;

const StyledTextarea = styled(StyledField)`
    width: 100%;
    resize: none;
    margin-bottom: 100px;
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

const StyledErrorMessage = styled(ErrorMessage)`
    color: red;
    font-size: 10px;
    position: absolute;
    top: 40px;
    left: 0;
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
                    <Formik
                        initialValues={{
                            name: '',
                            email: '',
                            message: ''
                        }}
                        validate={values => {
                            const errors = {};
                            if (!values.name) {
                                errors.name = "Imię wymagane"
                            }
                            if (/\s/.test(values.name)) {
                                errors.name = "Imię nie może zawierać żadnej spacji"
                            } else if (
                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                            ) {
                                errors.email = "Niepoprawny adres email";
                            }
                            else if (values.message.length < 120) {
                                errors.message = "Wiadomość musi mieć co najmniej 120 znaków"
                            }
                            return errors;
                        }}
                        onSubmit={(data, { setSubmitting, resetForm }) => {
                            setSubmitting(true)
                            fetch('https://fer-api.coderslab.pl/v1/portfolio/contact', {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify(data)
                            })
                            setSubmitting(false)
                            resetForm()
                        }}>
                        {
                            ({
                                isSubmitting,
                            }) => (
                                    <StyledForm>
                                        <StyledFormTopInputs>
                                            <StyledFormName>
                                                <StyledLabel>
                                                    Wpisz swoje imię
                                                </StyledLabel><br />
                                                <StyledField
                                                    name="name"
                                                    type="input"
                                                />
                                                <StyledErrorMessage
                                                    name="name"
                                                    component="span"
                                                />
                                            </StyledFormName>
                                            <StyledFormEmail>
                                                <StyledLabel>
                                                    Wpisz swój email
                                                </StyledLabel><br />
                                                <StyledErrorMessage
                                                    name="email"
                                                    component="div"
                                                />
                                                <StyledField
                                                    name="email"
                                                    type="input"
                                                />
                                            </StyledFormEmail>
                                        </StyledFormTopInputs>
                                        <StyledFormMessage>
                                            <StyledLabel>
                                                Wpisz swoją wiadomość
                                        </StyledLabel><br />
                                            <StyledErrorMessage
                                                name="message"
                                                component="div"
                                            />
                                            <StyledTextarea
                                                rows="5"
                                                name="message"
                                                component="textarea"
                                            />
                                        </StyledFormMessage>
                                        <StyledButton
                                            disabled={isSubmitting}
                                            type="submit">
                                            Wyślij
                                        </StyledButton>
                                    </StyledForm>
                                )
                        }
                    </Formik>
                </StyledFormContent>
            </StyledFormWrapper>
        </StyledContact>
    )
}

export default Contact;