import React, {Component} from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';

export default class Login extends Component{
    constructor(props){
        super(props);

        this.onChangeUserId = this.onChangeUserId.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            user_id: '',
            password: '',
            login_redirect: '',
            message: '',
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

    onSubmit(e){
        e.preventDefault();
        const login = {
            user_id: this.state.user_id,
            password: this.state.password,
        }

        axios.post(localStorage.getItem('api_url') + 'user/login', login).then(res => {
            if(res.data.type === 'success') {
                localStorage.setItem('access_token', res.data.token);
                this.setState({login_redirect: res.data.redirect});
            } else {
                this.setState({
                    message: <span className="alert alert-danger">User ID or Password Incorrect!</span>
                })
            }

        });
    }

    render(){
        const redirectTo = this.state.login_redirect;
        if(redirectTo){
            return <Redirect to={redirectTo}/>;
        }
        return(
            <div className="row mt-5">
                <div className="col-md-6" style={{textAlign: 'justify'}}>
                    What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                </div>
                <div className="col-md-6">
                    <div className="row mb-3">
                        <div className="col-md-12">
                            {this.state.message}
                        </div>
                    </div>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="user-id-id">User ID</label>
                            <input type="text" className="form-control" id="user-id-id" placeholder="Your User ID" onChange={this.onChangeUserId} value={this.state.user_id} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password-id">Password</label>
                            <input type="password" className="form-control" id="password-id" placeholder="Password" onChange={this.onChangePassword} value={this.state.password} required />
                        </div>
                        <button type="submit" className="btn btn-primary">Login</button>
                    </form>
                    New User? <Link to={'/user/register'}>Register Here</Link>
                </div>
            </div>
        )
    }
}
