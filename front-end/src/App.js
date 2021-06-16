import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import './styles.css';
import { Layout } from './layout';

function App() {
    return (
        <div>
            <MuiThemeProvider>
                <CssBaseline />
                <Router>
                    <Layout />
                </Router>
            </MuiThemeProvider>
        </div>
    );
}

export default App;
