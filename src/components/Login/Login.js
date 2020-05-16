import React from 'react';
import styled from 'styled-components';
import Decoration from '../Decoration';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { NavLink } from 'react-router-dom';
import { getUser } from '../../redux/users/operations';
import { connect } from 'react-redux';
import { signInWithGoogle } from '../../firebase/firebase.utils';

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
        height: 450px
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
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const StyledForm = styled(Form)`
`;

const StyledFormTopWrapper = styled.div`
    
`;

const StyledFormEmail = styled.div`
    position: relative;
`;

const StyledFormPassword = styled.div`
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

const StyledButtonsWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 50px;
`;

const StylednNavLink = styled(NavLink)`
    color: #000;
    font-weight: 300;
    font-size: 18px;
    line-height: 32px;
    text-decoration: none;
    padding: 13px;
`;

const StylednNavLinkHome = styled(NavLink)`
    width: 150px;
    height: 50px;
    border: 1px solid black;
    color: #000;
    font-weight: 300;
    font-size: 18px;
    text-decoration: none;
    padding: 13px;
`;

const StyledButton = styled.button`
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

const StyledLoginSucces = styled.div`
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

const Login = ({ getUser, user }) => {

    const isLoggedIn = user?.email;

    return (
        <StyledLoginWrapper>
            {
                isLoggedIn ? <StyledLoginSucces>
                    <StyledTitle>
                        Logowanie nastąpiło pomyślnie!
                </StyledTitle>
                    <Decoration />
                    <StylednNavLinkHome
                        to='/'
                    >
                        Strona Główna
                </StylednNavLinkHome>
                </StyledLoginSucces>
                    :
                    <StyledLoginContent>
                        <StyledLoginContentTop>
                            <StyledTitle>
                                Zaloguj się
                            </StyledTitle>
                            <Decoration />
                        </StyledLoginContentTop>
                        <StyledLoginContentBottom>
                            <Formik
                                initialValues={{
                                    email: '',
                                    password: ''
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
                                    }
                                    return errors;
                                }}
                                onSubmit={(data, { setSubmitting, resetForm }) => {
                                    setSubmitting(true)

                                    getUser(data)

                                    setSubmitting(false)
                                    resetForm()
                                }}

                            >
                                {
                                    ({ isSubmitting }) => (
                                        <StyledForm>
                                            <StyledFormTopWrapper>
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
                                            </StyledFormTopWrapper>
                                            <StyledButtonsWrapper>
                                                <StylednNavLink to='/rejestracja'>
                                                    Załóż konto
                                    </StylednNavLink>
                                                <StyledButton
                                                    disabled={isSubmitting}
                                                    type="submit">
                                                    Zaloguj się
                                    </StyledButton>
                                                <StyledButton

                                                    onClick={signInWithGoogle}
                                                >
                                                    Zaloguj z Google
                                    </StyledButton>
                                            </StyledButtonsWrapper>
                                        </StyledForm>
                                    )
                                }
                            </Formik>
                        </StyledLoginContentBottom>
                    </StyledLoginContent>
            }
        </StyledLoginWrapper>
    )
}

const mapStateToProps = ({ users }) => {
    return {
        user: users.current
    }
}

const mapDispatchToProps = (dispatch) => ({
    getUser: (user) => dispatch(getUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)


