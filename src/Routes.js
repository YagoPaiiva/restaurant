import React from 'react';
import { Switch } from 'react-router-dom';
import RouterHandler from './Components/RouterHandler';

import Home from './Pages/home';
import NotFound from './Pages/NotFound'

export default () =>{

    return(
        <Switch>

            <RouterHandler exact path="/"> 
            
            <Home />

            </RouterHandler>

            <RouterHandler>
            <NotFound />
            </RouterHandler>

        </Switch>
    )
}