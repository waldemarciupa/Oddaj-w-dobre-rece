import React from 'react';
import styled from 'styled-components';
import Decoration from '../Decoration';
import { NavLink } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const StyledLoginWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledLoginContent = styled.div`
    width: 500px;
    height: 650px;
    display: grid;

    @media (max-width: 1366px) {
        height: 550px
    }
`;

const StyledLoginContentTop = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const StyledTitle = styled.div`
    font-size: 38px;
    line-height: 55px;
    letter-spacing: -0.76px;
    font-weight: 400;
    margin-bottom: 50px;
`;

const StyledLoginContentBottom = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: relative;
`;

const StyledForm = styled(Form)`
`;

const StyledFormEmail = styled.div`
    position: relative;
`;

const StyledFormPassword = styled.div`
    position: relative;
`;

const StyledFormPasswordRepeat = styled.div`
    position: relative;
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

const StyledErrorMessage = styled(ErrorMessage)`
    color: red;
    font-size: 10px;
    position: absolute;
    top: 40px;
    left: 0;
`;

const StylednNavLink = styled(NavLink)`
    position: absolute;
    bottom: 0;
    left: 0;
    color: #000;
    font-weight: 300;
    font-size: 18px;
    line-height: 32px;
    text-decoration: none;
    padding: 13px;
`;

const StyledButton = styled.button`
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 13px;
    background: transparent;
    color: #000;
    font-family: ${({ theme }) => theme.OpenSans};
    font-weight: 300;
    font-size: 18px;
    line-height: 32px;
    text-decoration: none;
    border: 0.75px solid #3c3c3c;
    cursor: pointer;
`;

const StyledLabel = styled.label`
    font-size: 16px;
    line-height: 55px;
    font-weight: 600;
`;

const Register = () => {
    return (
        <StyledLoginWrapper>
            <StyledLoginContent>
                <StyledLoginContentTop>
                    <StyledTitle>
                        Załóż konto
                    </StyledTitle>
                    <Decoration />
                </StyledLoginContentTop>
                <StyledLoginContentBottom>
                    <Formik
                        initialValues={{
                            email: '',
                            password: '',
                            passwordRepeat: ''
                        }}
                        validate={values => {
                            const errors = {};
                            if (!values.email) {
                                errors.email = "Email wymagany"
                            } else if (
                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                            ) {
                                errors.email = "Niepoprawny adres email";
                            } else if (/\s/.test(values.email)) {
                                errors.email = "Email nie może zawierać żadnej spacji"
                            } else if (!values.password) {
                                errors.password = "Podaj hasło"
                            } else if (/\s/.test(values.password)) {
                                errors.password = "Hasło nie może zawierać żadnej spacji"
                            } else if (values.passwordRepeat !== values.password) {
                                errors.passwordRepeat = "Hasło nie pasuje do poprzedniego"
                            }
                            return errors;
                        }}
                        onSubmit={(data, { setSubmitting, resetForm }) => {
                            setSubmitting(true)
                            console.log(JSON.stringify(data))
                            setSubmitting(false)
                            resetForm()
                        }}>
                        {
                            ({ isSubmitting }) => (
                                <StyledForm>
                                    <StyledFormEmail>
                                        <StyledLabel>
                                            Email
                                    </StyledLabel><br />
                                        <StyledField
                                            name="email"
                                            type="input"
                                        />
                                        <StyledErrorMessage
                                            name="email"
                                            component="span"
                                        />
                                    </StyledFormEmail>
                                    <StyledFormPassword>
                                        <StyledLabel>
                                            Hasło
                                    </StyledLabel><br />
                                        <StyledField
                                            name="password"
                                            type="password"
                                        />
                                        <StyledErrorMessage
                                            name="password"
                                            component="span"
                                        />
                                    </StyledFormPassword>
                                    <StyledFormPasswordRepeat>
                                        <StyledLabel>
                                            Powtórz hasło
                                    </StyledLabel><br />
                                        <StyledField
                                            name="passwordRepeat"
                                            type="password"
                                        />
                                        <StyledErrorMessage
                                            name="passwordRepeat"
                                            component="span"
                                        />
                                    </StyledFormPasswordRepeat>
                                    <StylednNavLink to='/logowanie'>
                                        Zaloguj się
                                    </StylednNavLink>
                                    <StyledButton
                                        disabled={isSubmitting}
                                        type="submit">
                                        Załóż konto
                                    </StyledButton>
                                </StyledForm>
                            )
                        }


                    </Formik>
                </StyledLoginContentBottom>
            </StyledLoginContent>
        </StyledLoginWrapper>
    )
}

export default Register;