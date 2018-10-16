import React, {Component} from 'react';
import axios from 'axios';
import {Link, Redirect} from 'react-router-dom';

// Loading assets
var DashboardHomeImage = require('../img/dashboard-image.jpeg');

export default class User extends Component{

    constructor(props){
        super(props);
        this.state = {
            redirect: false,
        }

        // Checking if user has a valid token.
        let api_url = localStorage.getItem('api_url') + 'user/check-token'
        let token = localStorage.getItem('access_token');
        console.log(token);
        axios.post(
            api_url,
            {token: token}
        ).then(
            (res) => {
                if(res.data.type === 'failed')
                    this.setState({
                        redirect: '/user/login',
                    });
            });
    }

    render(){
        if(this.state.redirect) return <Redirect to={this.state.redirect}/>
        return(
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-6">
                        <img className="" src={DashboardHomeImage} alt="dashboard home"/>
                    </div>
                    <div className="col-md-6 mt-5 pt-5">
                        <Link to={'/dashboard/getquote/'} className="btn btn-lg btn-info mb-5">Get a Quote</Link>
                        <br />
                        <Link to={'/dashboard/retrivequote/'} className="btn btn-lg btn-info">Retrive a Quote</Link>
                    </div>
                </div>
            </div>

        );
    }
}
