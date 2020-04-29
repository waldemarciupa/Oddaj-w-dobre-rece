import React from 'react';
import GlobalStyle from './../theme/GlobalStyle';
import { theme } from './../theme/mainTheme';
import { ThemeProvider } from 'styled-components';
import Header from './../components/Header';

const MainTemplate = ({ children }) => {
    return (
        <div>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <>
                    <Header />
                    {children}
                </>
            </ThemeProvider>
        </div>
    )
}

export default MainTemplate;