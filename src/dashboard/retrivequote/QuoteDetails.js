import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import ResidencyType from '../../components/ResidencyTypeComponent';
import ResidencyUse from '../../components/ResidencyUseComponent';
import axios from 'axios';

// Loading assets
// var DashboardHomeImage = require('../../img/dashboard-image.jpeg');

export default class GetQuote extends Component{
    constructor(props){
        super(props);
        this.state ={
            quote: [],
            homeowner_details: [],
        }

        let api_url = localStorage.getItem('api_url') + "property/details/" + this.props.match.params.id
        axios.post(api_url, {token: localStorage.getItem('access_token')} ).then(res => {
            // console.log(res.data.result);
            this.setState({
                quote: res.data.result,
                homeowner_details: res.data.result.homeowner_details,
            });
            // console.log(this.state.quote.homeowner_details);
        });
    }

    render(){
        return(
            <div className="row mt-5">

                <div className="col-md-12 mb-5">
                    <h1 className="text-center">Quote Details</h1>
                </div>

                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-6">
                            <h2 className="text-center">Location Details</h2>
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <th>Quote ID #</th>
                                        <td>{this.state.quote._id}</td>
                                    </tr>
                                    <tr>
                                        <th>Residence Type</th>
                                        <td><ResidencyType id={this.state.quote.residence_type}/></td>
                                    </tr>
                                    <tr>
                                        <th>Address Line One</th>
                                        <td>{this.state.quote.address_line_one}</td>
                                    </tr>
                                    <tr>
                                        <th>Address Line Two</th>
                                        <td>{this.state.quote.address_line_two}</td>
                                    </tr>
                                    <tr>
                                        <th>City</th>
                                        <td>{this.state.quote.city}</td>
                                    </tr>
                                    <tr>
                                        <th>State</th>
                                        <td>{this.state.quote.state}</td>
                                    </tr>
                                    <tr>
                                        <th>Zip</th>
                                        <td>{this.state.quote.zip}</td>
                                    </tr>
                                    <tr>
                                        <th>Residence Use</th>
                                        <td><ResidencyUse id={this.state.quote.residence_use}/></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>


                        <div className="col-md-6">
                            <h2 className="text-center">Homeowner Details</h2>
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <th>First Name</th>
                                        <td>{this.state.homeowner_details.first_name}</td>
                                    </tr>
                                    <tr>
                                        <th>Last Name</th>
                                        <td>{this.state.homeowner_details.last_name}</td>
                                    </tr>
                                    <tr>
                                        <th>Date of Birth</th>
                                        <td>{this.state.homeowner_details.dob}</td>
                                    </tr>
                                    <tr>
                                        <th>Is Retired? </th>
                                        <td>{this.state.homeowner_details.retired}</td>
                                    </tr>
                                    <tr>
                                        <th>Social Security Number </th>
                                        <td>{this.state.homeowner_details.ssn}</td>
                                    </tr>
                                    <tr>
                                        <th>Email Address </th>
                                        <td>{this.state.homeowner_details.email}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>


                        <div className="col-md-6">
                            <h2 className="text-center">Property Details</h2>
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <th>Market Value</th>
                                        <td>{this.state.quote.market_value}</td>
                                    </tr>
                                    <tr>
                                        <th>Year Build</th>
                                        <td>{this.state.quote.originally_built}</td>
                                    </tr>
                                    <tr>
                                        <th>Square Footage</th>
                                        <td>{this.state.quote.area}</td>
                                    </tr>
                                    <tr>
                                        <th>Dwealling Style</th>
                                        <td>{this.state.quote.dwelling_style}</td>
                                    </tr>
                                    <tr>
                                        <th>Roof Material</th>
                                        <td>{this.state.quote.roof_material}</td>
                                    </tr>
                                    <tr>
                                        <th>Garage Type</th>
                                        <td>{this.state.quote.garage}</td>
                                    </tr>
                                    <tr>
                                        <th>Number of Full Baths</th>
                                        <td>{this.state.quote.full_bath}</td>
                                    </tr>
                                    <tr>
                                        <th>Number of Half Baths</th>
                                        <td>{this.state.quote.half_bath}</td>
                                    </tr>
                                    <tr>
                                        <th>Has Swimming Pool</th>
                                        <td>{this.state.quote.has_pool}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>


                        <div className="col-md-6">
                            <h2 className="text-center">Coverage Details</h2>
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <th>Monthly Premium</th>
                                        <td>{this.state.quote.monthly_premium}</td>
                                    </tr>
                                    <tr>
                                        <th>Dwelling Coverage</th>
                                        <td>{this.state.quote.dwelling_coverage}</td>
                                    </tr>
                                    <tr>
                                        <th>Detached Structures</th>
                                        <td>{this.state.quote.detatched_structures}</td>
                                    </tr>
                                    <tr>
                                        <th>Personal Property</th>
                                        <td>{this.state.quote.personal_property}</td>
                                    </tr>
                                    <tr>
                                        <th>Additional Living Expenses</th>
                                        <td>{this.state.quote.additional_living_expense}</td>
                                    </tr>
                                    <tr>
                                        <th>Medical Expenses</th>
                                        <td>{this.state.quote.medical_expense}</td>
                                    </tr>
                                    <tr>
                                        <th>Deductable</th>
                                        <td>{this.state.quote.deductable}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12 text-center">
                            <Link to={`/dashboard/retrivequote/purchase/${this.state.quote._id}`} className="nav-link">Purchase Quote</Link>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
