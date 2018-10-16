import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

// Loading assets
// var DashboardHomeImage = require('../../img/dashboard-image.jpeg');

export default class PropertyDetails extends Component{
    constructor(props){
        super(props);

        this.onChangeMonthlyPremium = this.onChangeMonthlyPremium.bind(this);
        this.onChangeDwellingCoverage = this.onChangeDwellingCoverage.bind(this);
        this.onChangeDetatchedStructures = this.onChangeDetatchedStructures.bind(this);
        this.onChangePersonalProperty = this.onChangePersonalProperty.bind(this);
        this.onChangeAdditionalLivingExpense = this.onChangeAdditionalLivingExpense.bind(this);
        this.onChangeMedicalExpense = this.onChangeMedicalExpense.bind(this);
        this.onChangeDeductable = this.onChangeDeductable.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            monthly_premium: '',
            dwelling_coverage: '',
            detatched_structures: '',
            personal_property: '',
            additional_living_expense: '',
            medical_expense: '',
            deductable: '',
            redirect: false,
        }
    }

    onChangeMonthlyPremium(e){
        this.setState({
            monthly_premium: e.target.value
        });

        // console.log(e.target.value);
    }

    onChangeDwellingCoverage(e){
        this.setState({
            dwelling_coverage: e.target.value
        });

        // console.log(e.target.value);
    }

    onChangeDetatchedStructures(e){
        this.setState({
            detatched_structures: e.target.value
        });

        // console.log(e.target.value);
    }

    onChangePersonalProperty(e){
        this.setState({
            personal_property: e.target.value
        });

        // console.log(e.target.value);
    }

    onChangeAdditionalLivingExpense(e){
        this.setState({
            additional_living_expense: e.target.value
        });

        // console.log(e.target.value);
    }

    onChangeMedicalExpense(e){
        this.setState({
            medical_expense: e.target.value
        });

        // console.log(e.target.value);
    }

    onChangeDeductable(e){
        this.setState({
            deductable: e.target.value
        });

        // console.log(e.target.value);
    }

    onSubmit(e){
        e.preventDefault();
        const coveragedetails = {
            monthly_premium: this.state.monthly_premium,
            dwelling_coverage: this.state.dwelling_coverage,
            detatched_structures: this.state.detatched_structures,
            personal_property: this.state.personal_property,
            additional_living_expense: this.state.additional_living_expense,
            medical_expense: this.state.medical_expense,
            deductable: this.state.deductable,
        }

        // Loading Previously Saved Data
        var getquote = JSON.parse(localStorage.getItem('getquote'))
        var homeownerinfo = JSON.parse(localStorage.getItem('homeownerinfo'))
        var propertydetails = JSON.parse(localStorage.getItem('propertydetails'))

        let api_url = localStorage.getItem('api_url') + 'property/add';
        axios.post(api_url, [getquote, homeownerinfo, propertydetails, coveragedetails, {token: localStorage.getItem('access_token')}]).then(res => {
            // console.log(res.data);
            let data = res.data;
            if(data.type === 'success') this.setState({
                redirect: '/dashboard/retrivequote'
            })
        });
    }

    render(){
        if(this.state.redirect) return(<Redirect to={this.state.redirect}/>);
        return(
            <div className="row mt-5">

                <div className="col-md-12 mb-5">
                    <h1 className="text-center">Coverage Details</h1>
                </div>

                <div className="col-md-6 offset-md-3">
                    <form onSubmit={this.onSubmit}>

                        <div className="form-group">
                            <label htmlFor="monthly-premium-id">Monthly Premium ($) <span className="form-required">*</span></label>
                            <input type="text" className="form-control" id="monthly-premium-id" placeholder="" onChange={this.onChangeMonthlyPremium} value={this.state.monthly_premium} required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="dwelling-coverage-id">Dwelling Coverage ($) <span className="form-required">*</span></label>
                            <input type="text" className="form-control" id="dwelling-coverage-id" placeholder="" onChange={this.onChangeDwellingCoverage} value={this.state.dwelling_coverage} required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="detatched-structures-id">Detatched Structures ($) <span className="form-required">*</span></label>
                            <input type="text" className="form-control" id="detatched-structures-id" placeholder="" onChange={this.onChangeDetatchedStructures} value={this.state.detatched_structures} required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="personal-property-id">Personal Property ($) <span className="form-required">*</span></label>
                            <input type="text" className="form-control" id="personal-property-id" placeholder="" onChange={this.onChangePersonalProperty} value={this.state.personal_property} required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="additional-living-expense-id">Additional Living Expense ($) <span className="form-required">*</span></label>
                            <input type="text" className="form-control" id="additional-living-expense-id" placeholder="" onChange={this.onChangeAdditionalLivingExpense} value={this.state.additional_living_expense} required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="medical-expense-id">Medical Expense ($) <span className="form-required">*</span></label>
                            <input type="text" className="form-control" id="medical-expense-id" placeholder="" onChange={this.onChangeMedicalExpense} value={this.state.medical_expense} required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="deductable-id">Deductable ($) <span className="form-required">*</span></label>
                            <input type="text" className="form-control" id="deductable-id" placeholder="" onChange={this.onChangeDeductable} value={this.state.deductable} required />
                        </div>

                        <button type="submit" className="btn btn-primary">Continue</button>
                    </form>
                </div>
            </div>
        );
    }
}
