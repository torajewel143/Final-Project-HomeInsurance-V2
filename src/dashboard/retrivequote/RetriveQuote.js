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
            quotes: []
        }


        let api_url = localStorage.getItem('api_url') + 'property/list'
        let token = localStorage.getItem('access_token');
        axios.post(api_url, {token: token} ).then(res => {
            this.setState({
                quotes: res.data.result,
            })
        });
    }

    render(){
        return(
            <div className="row mt-5">

                <div className="col-md-12 mb-5">
                    <h1 className="text-center">Retrive Quote</h1>
                </div>

                <div className="col-md-12">
                    <table className="table text-center">
                        <thead>
                        <tr>
                          <th scope="col">QuoteID #</th>
                          <th scope="col">Residence Type</th>
                          <th scope="col">Address</th>
                          <th scope="col">City</th>
                          <th scope="col">State</th>
                          <th scope="col">Zip</th>
                          <th scope="col">Residence Use</th>
                          <th scope="col">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                            {this.state.quotes.map((quote, index) => {
                                return(
                                    <tr key={quote._id}>
                                        <td>{quote._id}</td>
                                        <td><ResidencyType id={quote.residence_type}/></td>
                                        <td>{quote.address_line_one}</td>
                                        <td>{quote.city}</td>
                                        <td>{quote.state}</td>
                                        <td>{quote.zip}</td>
                                        <td><ResidencyUse id={quote.residence_use}/></td>
                                        <td><Link to={`retrivequote/details/${quote._id}`} className="nav-link">Details</Link></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>

            </div>
        );
    }
}
