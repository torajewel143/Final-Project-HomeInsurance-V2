import React, {Component} from 'react';
import axios from 'axios';

export default class CreateComponent extends Component{

    constructor(props){
        super(props);
        this.onChangeHostname = this.onChangeHostname.bind(this);
        this.onChangePort = this.onChangePort.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            port: ''
        }
    }

    onChangeHostname(e){
        this.setState({
            name: e.target.value
        });
    }

    onChangePort(e){
        this.setState({
            port: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();
        const serverport = {
            name: this.state.name,
            port: this.state.port
        }
        // axios.get('http://localhost:4200/serverport/dummy').then(res => console.log(res));
        axios.post('http://localhost:4200/serverport/add', serverport).then(res => {
            console.log("Valid Response");
            console.log(res.data);
        });
        // console.log(`name is ${this.state.name} and port is ${this.state.port}`);
        this.setState({
            name: '',
            port: ''
        });
    }

    render(){
        return(
            <div style={{marginTop: 50}}>
                <h3>Add New Server</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add Host Name:  </label>
                        <input type="text" value={this.state.name} className="form-control" onChange={this.onChangeHostname}/>
                    </div>
                    <div className="form-group">
                        <label>Add Server Port: </label>
                        <input type="text" value={this.state.port} className="form-control" onChange={this.onChangePort}/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add Node server" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}
