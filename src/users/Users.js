import React, {Component} from 'react';
// import axios from 'axios';
import {Switch, Route} from 'react-router-dom';

import Login from './login';
import Register from './register';
import Logout from './logout';
import HomeOwnerInfo from './homeownerinformation';

export default class User extends Component{
    render(){
        return(
            <div className="container">
                <Switch>
                    <Route exact path='/' component={Login} />
                    <Route path='/login' component={Login} />
                    <Route path='/user/login' component={Login} />
                    <Route path='/user/logout' component={Logout} />
                    <Route path='/user/register' component={Register} />
                    <Route path='/user/homeownerinformation' component={HomeOwnerInfo} />
                </Switch>
            </div>
        );
    }
}
