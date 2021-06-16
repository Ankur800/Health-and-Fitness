import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import './styles.css';
import { Layout } from './layout';

function App() {
    return (
        <div>
            <CssBaseline />
            <Router>
                <Layout />
            </Router>
        </div>
    );
}

export default App;
