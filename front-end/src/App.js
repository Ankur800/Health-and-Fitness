import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alert from './components/alert';
import Dashboard from './components/dashboard/Dashboard';
import CompleteProfile from './components/complete-profile';
import PrivateRoute from './components/routing/PrivateRoute';
import CaloriesIntake from './components/calories-intake';
import CaloriesBurnt from './components/calories-burnt';
import Footer from './components/layout/Footer';
import NotFound from './components/layout/NotFound';
// Redux
import { Provider } from 'react-redux';
import store from './store';
import setAuthToken from './utils/setAuthToken';
import { loadUser } from './actions/auth';

import './styles.css';

if (localStorage.token) {
    setAuthToken(localStorage.token);
}

const App = () => {
    useEffect(() => {
        store.dispatch(loadUser());
    }, []);

    return (
        <Provider store={store}>
            <Router>
                <Fragment>
                    <Navbar />
                    <Route exact path='/' component={Landing} />
                    <Alert />
                    <Switch>
                        <Route exact path='/register' component={Register} />
                        <Route exact path='/login' component={Login} />
                        <PrivateRoute
                            exact
                            path='/dashboard'
                            component={Dashboard}
                        />
                        <PrivateRoute
                            exact
                            path='/complete-user-profile'
                            component={CompleteProfile}
                        />
                        <PrivateRoute
                            exact
                            path='/add-calories-intake'
                            component={CaloriesIntake}
                        />
                        <PrivateRoute
                            exact
                            path='/add-calories-burnt'
                            component={CaloriesBurnt}
                        />
                        {/* <Route component={NotFound} /> */}
                    </Switch>
                    <Footer />
                </Fragment>
            </Router>
        </Provider>
    );
};

export default App;
