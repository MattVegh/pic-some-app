import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import ReactDOM from 'react-dom';
import { AppContextProvider } from './AppContext'
import './index.css';
import App from './App';


ReactDOM.render(
    <AppContextProvider>
        <Router>
            <App />
        </Router>
    </AppContextProvider>,
    document.getElementById('root'));


