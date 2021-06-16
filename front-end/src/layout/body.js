import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../views/home';
import Register from '../views/registration';
import Login from '../views/login';

function Body() {
    return (
        <div>
            <Switch>
                <Route path='/' exact>
                    <Home />
                </Route>
                <Route path='/register' exact>
                    <Register />
                </Route>
                <Route path='/login' exact>
                    <Login />
                </Route>
            </Switch>
        </div>
    );
}

export default Body;
