import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core'
import 'typeface-roboto';
import './i18n'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#1F398D',
            dark: '#071956',
            contrastText: '#fff'
        },
        secondary: {
            main: '#F92222'
        },
        info: {
            main: "#bac778",
        },
        success: {
            main: "#bac778",
        },
        warning: {
            main: "#bac778",
        },



    },
    overrides: {
        MuiTooltip: {
            tooltip: {
                fontSize: "1em",
            }
        }
    }
});

console.log(theme)
ReactDOM.render(
    <Suspense fallback='loading...'>
        <MuiThemeProvider theme={theme}>
            <App />
        </MuiThemeProvider>
    </Suspense>

    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
