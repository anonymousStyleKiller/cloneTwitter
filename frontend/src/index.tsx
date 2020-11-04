import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ThemeProvider} from '@material-ui/core';
import {theme} from './theme';
import {BrowserRouter} from "react-router-dom";
import {store} from "./store/store";
import {Provider} from 'react-redux';

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    </ThemeProvider>,
    document.getElementById('root')
);

