import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

export default class Register extends Component{
    constructor(props){
        super(props);

        this.onChangeUserId = this.onChangeUserId.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeRePassword = this.onChangeRePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            user_id: '',
            password: '',
            re_password: '',
            message: '',
            redirect: false,
        }
    }

    onChangeUserId(e){
        this.setState({
            user_id: e.target.value
        })
        // console.log(e.target.value);
    }

    onChangePassword(e){
        this.setState({
            password: e.target.value
        })
        // console.log(e.target.value);
    }

    onChangeRePassword(e){
        this.setState({
            re_password: e.target.value
        })
        // console.log(e.target.value);
    }

    onSubmit(e){
        e.preventDefault();
        let login = {
            user_id: this.state.user_id,
            password: this.state.password,
            re_password: this.state.re_password,
        }
        let api_url = localStorage.getItem('api_url') + 'user/register';
        // console.log(api_url);
        axios.post(api_url, login).then(res => {
            let data = res.data;
            // console.log(data);
            localStorage.setItem('access_token', data.token);
            if(data.type === 'failed'){
                this.setState({
                    message: <div className="alert alert-danger">{data.message}</div>
                });
            } else {
                this.setState({
                    redirect: data.redirect,
                })
            }
        });
    }

    render(){
        const redirectTo = this.state.redirect;
        if(redirectTo){
            return <Redirect to={redirectTo}/>;
        }
        return(
            <div className="row mt-5">
                <div className="col-md-6 offset-md-3">
                    {this.state.message}
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="user-id-id">User ID <span className='form-required'>*</span></label>
                            <input type="text" className="form-control" id="user-id-id" placeholder="Your User ID" onChange={this.onChangeUserId} value={this.state.user_id} required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password-id">Password <span className='form-required'>*</span></label>
                            <input type="password" className="form-control" id="password-id" placeholder="Password" onChange={this.onChangePassword} value={this.state.password} required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="re-password-id">Re-enter Password <span className='form-required'>*</span></label>
                            <input type="password" className="form-control" id="re-password-id" placeholder="Password" onChange={this.onChangeRePassword} value={this.state.re_password} required />
                        </div>
                        <button type="submit" className="btn btn-primary">Register</button>
                    </form>
                </div>
            </div>
        )
    }
}
