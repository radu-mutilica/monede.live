import React from 'react';
import {Switch, Route} from 'react-router-dom';

import TopPage from '../pages/topPage';
import CoinPage from '../pages/coinPage';
import LandingPage from "../pages/landingPage";

const Main = () => {
    return (
        <Switch>
            <Route exact path='/' component={LandingPage}/>
            <Route exact path='/top' component={TopPage}/>
            <Route exact path='/coin' component={CoinPage}/>
        </Switch>
    );
}

export default Main;