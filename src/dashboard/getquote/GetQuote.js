import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

// Loading assets
var DashboardHomeImage = require('../../img/dashboard-image.jpeg');

export default class GetQuote extends Component{
    constructor(props){
        super(props);

        this.onChangeResidenceType = this.onChangeResidenceType.bind(this);
        this.onChangeAddressLineOne = this.onChangeAddressLineOne.bind(this);
        this.onChangeAddressLineTwo = this.onChangeAddressLineTwo.bind(this);
        this.onChangeState = this.onChangeState.bind(this);
        this.onChangeCity = this.onChangeCity.bind(this);
        this.onChangeZip = this.onChangeZip.bind(this);
        this.onChangeResidenceUse = this.onChangeResidenceUse.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            residence_type: '',
            address_line_one: '',
            address_line_two: '',
            state: '',
            city: '',
            zip: '',
            residence_use: '',
        }

        this.state.part_one_done = false;
    }

    onChangeResidenceType(e){
        this.setState({
            residence_type: e.target.value
        });

        // console.log(e.target.value);
    }

    onChangeAddressLineOne(e){
        this.setState({
            address_line_one: e.target.value
        });

        // console.log(e.target.value);
    }

    onChangeAddressLineTwo(e){
        this.setState({
            address_line_two: e.target.value
        });

        // console.log(e.target.value);
    }

    onChangeState(e){
        this.setState({
            state: e.target.value
        });

        // console.log(e.target.value);
    }

    onChangeCity(e){
        this.setState({
            city: e.target.value
        });

        // console.log(e.target.value);
    }

    onChangeZip(e){
        this.setState({
            zip: e.target.value
        });

        // console.log(e.target.value);
    }

    onChangeResidenceUse(e){
        this.setState({
            residence_use: e.target.value
        });

        // console.log(e.target.value);
    }

    onSubmit(e){
        e.preventDefault();

        var getquote = {
            residence_type: this.state.residence_type,
            address_line_one: this.state.address_line_one,
            address_line_two: this.state.address_line_two,
            state: this.state.state,
            city: this.state.city,
            zip: this.state.zip,
            residence_use: this.state.residence_use,
        }

        localStorage.setItem('getquote', JSON.stringify(getquote));

        this.setState({
            'part_one_done': true,
        });
    }

    render(){
        const redirectTo = this.state.part_one_done;
        if(redirectTo === true){
            return <Redirect to="/user/homeownerinformation"/>;
        } else{
            return(
                <div className="row mt-5">

                    <div className="col-md-12 mb-5">
                        <h1 className="text-center">Get a Quote</h1>
                    </div>

                    <div className="col-md-6">
                        <img className="" src={DashboardHomeImage} alt="dashboard home"/>
                    </div>
                    <div className="col-md-6">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label htmlFor="residence-type-id">Residence Type <span className="form-required">*</span></label>
                                <select className="form-control" id="residence-type-id" onChange={this.onChangeResidenceType} value={this.state.residence_type} required >
                                    <option value="">Select One</option>
                                    <option value="1">Single Family Home</option>
                                    <option value="2">Condo</option>
                                    <option value="3">Townhouse</option>
                                    <option value="4">Rowhouse</option>
                                    <option value="5">Duplex</option>
                                    <option value="6">Apartment</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="address-line-one-id">Address Line 1 <span className="form-required">*</span></label>
                                <input type="text" className="form-control" id="address-line-one-id" placeholder="" onChange={this.onChangeAddressLineOne} value={this.state.address_line_one} required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="address-line-two-id">Address Line 2</label>
                                <input type="text" className="form-control" id="address-line-two-id" placeholder="" onChange={this.onChangeAddressLineTwo} value={this.state.address_line_two} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="state-id">State <span className="form-required">*</span></label>
                                <input type="text" className="form-control" id="state-id" placeholder="" onChange={this.onChangeState} value={this.state.state} required/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="city-id">City <span className="form-required">*</span></label>
                                <input type="text" className="form-control" id="city-id" placeholder="" onChange={this.onChangeCity} value={this.state.city} required/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="zip-id">Zip <span className="form-required">*</span></label>
                                <input type="text" className="form-control" id="zip-id" placeholder="" onChange={this.onChangeZip} value={this.state.zip} required/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="residence-use-id">Residence Use <span className="form-required">*</span></label>
                                <select className="form-control" id="residence-use-id" onChange={this.onChangeResidenceUse} value={this.state.residence_use} required>
                                    <option value="">Select One</option>
                                    <option value="1">Primary</option>
                                    <option value="2">Secondary</option>
                                    <option value="3">Rental Property</option>
                                </select>
                            </div>

                            <button type="submit" className="btn btn-primary">Continue</button>
                        </form>
                    </div>
                </div>
            );
        }
    }
}
