import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';

// Loading assets
var DashboardHomeImage = require('../img/dashboard-image.jpeg');


export default class Register extends Component{
    constructor(props){
        super(props);

        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeDOB = this.onChangeDOB.bind(this);
        this.onChangeRetired = this.onChangeRetired.bind(this);
        this.onChangeSSN = this.onChangeSSN.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            first_name: '',
            last_name: '',
            dob: '',
            retired: 'no',
            ssn: '',
            email: '',
        }

        this.state.part_two_done = false;
    }

    onChangeFirstName(e){
        this.setState({
            first_name: e.target.value
        })
        // console.log(e.target.value);
    }

    onChangeLastName(e){
        this.setState({
            last_name: e.target.value
        })
        // console.log(e.target.value);
    }

    onChangeDOB(e){
        this.setState({
            dob: e.target.value
        })
        // console.log(e.target.value);
    }

    onChangeRetired(e){
        this.setState({
            retired: e.target.value
        })
        // console.log(e.target.value);
    }

    onChangeSSN(e){
        this.setState({
            ssn: e.target.value
        })
        // console.log(e.target.value);
    }

    onChangeEmail(e){
        this.setState({
            email: e.target.value
        })
        // console.log(e.target.value);
    }

    onSubmit(e){
        e.preventDefault();
        var homeownerinfo = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            dob: this.state.dob,
            retired: this.state.retired,
            ssn: this.state.ssn,
            email: this.state.email,
        }

        localStorage.setItem('homeownerinfo', JSON.stringify(homeownerinfo));

        this.setState({
            'part_two_done': true
        })
    }

    render(){
        const redirectTo = this.state.part_two_done;
        if(redirectTo === true){
            return <Redirect to="/dashboard/getquote/propertydetails"/>;
        }
        return(
            <div className="row mt-5">
                <div className="col-md-12 mb-5">
                    <h1 className="text-center">Homeowner Information</h1>
                </div>
                <div className="col-md-6">
                    <img className="" src={DashboardHomeImage} alt="dashboard home"/>
                </div>
                <div className="col-md-6">

                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="first-name-id">First Name <span className='form-required'>*</span></label>
                            <input type="text" className="form-control" id="first-name-id" placeholder="First Name" onChange={this.onChangeFirstName} value={this.state.first_name} required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="last-name-id">Last Name <span className='form-required'>*</span></label>
                            <input type="text" className="form-control" id="last-name-id" placeholder="Last Name" onChange={this.onChangeLastName} value={this.state.last_name} required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="date-of-birth-id">Date of Birth <span className='form-required'>*</span></label>
                            <input type="text" className="form-control" id="date-of-birth-id" placeholder="mm/dd/yyyy" onChange={this.onChangeDOB} value={this.state.dob} required />
                        </div>

                        <div className="form-group">
                            <label>Are you retired? <span className='form-required'>*</span></label>
                            <label><input type="radio" onChange={this.onChangeRetired} value="yes" checked={this.state.retired === "yes"} name="retired" />Yes</label>
                            <label><input type="radio" onChange={this.onChangeRetired} value="no" checked={this.state.retired === "no"} name="retired" />No</label>
                        </div>

                        <div className="form-group">
                            <label htmlFor="ssn-id">Social Security Number <span className='form-required'>*</span></label>
                            <input type="text" className="form-control" id="ssn-id" placeholder="" onChange={this.onChangeSSN} value={this.state.ssn} required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email-id">Email <span className='form-required'>*</span></label>
                            <input type="email" className="form-control" id="email-id" placeholder="" onChange={this.onChangeEmail} value={this.state.email} required />
                        </div>

                        <button type="submit" className="btn btn-primary">Continue</button>
                    </form>
                </div>
            </div>
        )
    }
}
