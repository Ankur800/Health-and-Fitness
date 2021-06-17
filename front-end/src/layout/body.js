import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../views/home';
import Register from '../views/registration';
import Login from '../views/login';
import CompleteProfile from '../views/complete-profile';

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
                <Route path='/complete-user-profile' exact>
                    <CompleteProfile />
                </Route>
            </Switch>
        </div>
    );
}

export default Body;
