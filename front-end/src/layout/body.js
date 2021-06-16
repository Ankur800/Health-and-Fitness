import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from '../views/home';

function Body() {
    return (
        <div>
            <Switch>
                <Route path='/' exact>
                    <Home />
                </Route>
            </Switch>
        </div>
    );
}

export default Body;
