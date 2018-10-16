import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Purchase extends Component{
    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeStartDate = this.onChangeStartDate.bind(this);
        this.onChangetandc = this.onChangetandc.bind(this);

        this.state = {
            start_date: '',
            tandc: true,
            message: '',
        }
    }

    onChangeStartDate(e){
        this.setState({
            start_date: e.target.value,
        })
    }

    onChangetandc(e){
        this.setState({
            tandc: !this.state.tandc,
        })
    }

    onSubmit(e){
        e.preventDefault();
        let api_url = localStorage.getItem('api_url') + 'property/purchase/'
        // console.log(localStorage.getItem('access_token'));
        axios.post(api_url, {'property_id': this.props.match.params.id, 'policy_start_date': this.state.start_date, token: localStorage.getItem('access_token') })
        .then( res => {
            console.log(res.data);
            if(res.data.type === 'success')
                this.setState({
                    message: <div className="alert alert-success">Purchase Successful.</div>
                })

        });
    }

    render(){
        return(
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                    <h3>Quote ID # {this.props.match.params.id}</h3>
                    {this.state.message}
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="user-id-id">Policy Start Date</label>
                            <input type="text" className="form-control" id="start-date-id" name="start-date" placeholder="mm/dd/yyyy" onChange={this.onChangeStartDate} value={this.state.start_date} required />
                            <span className="danger">Policy start date can't be more then 60 days from current date</span>
                        </div>
                        <div className="form-group">
                            <div className="row">
                                <div className="col-md-1">
                                    <input type="checkbox" checked={this.state.isChecked} className="form-control" id="tandc-id" name="tandc" placeholder="mm/dd/yyyy" onChange={this.onChangetandc} required />
                                </div>
                                <div className="col-md-11">
                                    <label htmlFor="tandc-id">I have carefully studied and aggreed to the <Link to={'/terms-and-conditions'}>terms and conditions</Link>.</label>
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Purchase</button>
                    </form>
                    </div>
                </div>
            </div>
        )
    }
}
