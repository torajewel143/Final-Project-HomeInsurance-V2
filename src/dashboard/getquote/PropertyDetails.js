import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';

// Loading assets
// var DashboardHomeImage = require('../../img/dashboard-image.jpeg');

export default class PropertyDetails extends Component{
    constructor(props){
        super(props);

        this.onChangeMarketValue = this.onChangeMarketValue.bind(this);
        this.onChangeOriginallyBuilt = this.onChangeOriginallyBuilt.bind(this);
        this.onChangeArea = this.onChangeArea.bind(this);
        this.onChangeDewellingStyle = this.onChangeDewellingStyle.bind(this);
        this.onChangeRoofMaterial = this.onChangeRoofMaterial.bind(this);
        this.onChangeGarage = this.onChangeGarage.bind(this);
        this.onChangeFullBath = this.onChangeFullBath.bind(this);
        this.onChangeHalfBath = this.onChangeHalfBath.bind(this);
        this.onChangeHasPool = this.onChangeHasPool.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            market_value: '',
            originally_built: '',
            area: '',
            dwelling_style: '',
            roof_material: '',
            garage: '',
            full_bath: '',
            half_bath: '',
            has_pool: '',
        }

        this.state.part_three_done = false;

    }

    onChangeMarketValue(e){
        this.setState({
            market_value: e.target.value
        });

        // console.log(e.target.value);
    }

    onChangeOriginallyBuilt(e){
        this.setState({
            originally_built: e.target.value
        });

        // console.log(e.target.value);
    }

    onChangeArea(e){
        this.setState({
            area: e.target.value
        });

        // console.log(e.target.value);
    }

    onChangeDewellingStyle(e){
        this.setState({
            dwelling_style: e.target.value
        });

        // console.log(e.target.value);
    }

    onChangeRoofMaterial(e){
        this.setState({
            roof_material: e.target.value
        });

        // console.log(e.target.value);
    }

    onChangeGarage(e){
        this.setState({
            garage: e.target.value
        });

        // console.log(e.target.value);
    }

    onChangeFullBath(e){
        this.setState({
            full_bath: e.target.value
        });

        // console.log(e.target.value);
    }

    onChangeHalfBath(e){
        this.setState({
            half_bath: e.target.value
        });

        // console.log(e.target.value);
    }

    onChangeHasPool(e){
        this.setState({
            has_pool: e.target.value
        });

        // console.log(e.target.value);
    }

    onSubmit(e){
        e.preventDefault();
        const propertydetails = {
            market_value: this.state.market_value,
            originally_built: this.state.originally_built,
            area: this.state.area,
            dwelling_style: this.state.dwelling_style,
            roof_material: this.state.roof_material,
            garage: this.state.garage,
            full_bath: this.state.full_bath,
            half_bath: this.state.half_bath,
            has_pool: this.state.has_pool,
        }

        localStorage.setItem('propertydetails', JSON.stringify(propertydetails));
        this.setState({
            part_three_done: true,
        })
    }

    render(){
        const redirectTo = this.state.part_three_done;
        if(redirectTo === true){
            return <Redirect to="/dashboard/getquote/coveragedetails"/>;
        }
        return(
            <div className="row mt-5">
                <div className="col-md-12 mb-5">
                    <h1 className="text-center">Property Details</h1>
                </div>

                <div className="col-md-6 offset-md-3">
                    <form onSubmit={this.onSubmit}>

                        <div className="form-group">
                            <label htmlFor="market-value-id">What is the market value of your home? ($) <span className="form-required">*</span></label>
                            <input type="text" className="form-control" id="market-value-id" placeholder="" onChange={this.onChangeMarketValue} value={this.state.market_value} required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="home-built-id">What year your home was originally build? <span className="form-required">*</span></label>
                            <input type="text" className="form-control" id="home-built-id" placeholder="" onChange={this.onChangeOriginallyBuilt} value={this.state.home_built} required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="area-id">Total Area (in square feet) <span className="form-required">*</span></label>
                            <input type="text" className="form-control" id="area-id" placeholder="" onChange={this.onChangeArea} value={this.state.area} required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="dwelling-style-id">Dwelling Style <span className="form-required">*</span></label>
                            <select className="form-control" id="dwelling-style-id" onChange={this.onChangeDewellingStyle} value={this.state.dwelling_style} required >
                                <option value="">Select One</option>
                                <option value="1">1 Story</option>
                                <option value="2">1.5 Story</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="roof-material-id">Roof Material <span className="form-required">*</span></label>
                            <select className="form-control" id="dwelling-style-id" onChange={this.onChangeRoofMaterial} value={this.state.roof_material} required >
                                <option value="">Select One</option>
                                <option value="1">Concrete</option>
                                <option value="2">Clay</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="type-of-garage-id">Type of Garage <span className="form-required">*</span></label>
                            <select className="form-control" id="type-of-garage-id" onChange={this.onChangeGarage} value={this.state.garage} required >
                                <option value="">Select One</option>
                                <option value="1">Attached</option>
                                <option value="2">Detached</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="full-bath-id">Number of Full Baths <span className="form-required">*</span></label>
                            <input type="number" className="form-control" id="full-bath-id" placeholder="" onChange={this.onChangeFullBath} value={this.state.full_bath} required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="half-bath-id">Number of Half Baths <span className="form-required">*</span></label>
                            <input type="number" className="form-control" id="half-bath-id" placeholder="" onChange={this.onChangeHalfBath} value={this.state.half_bath} required />
                        </div>

                        <div className="form-group">
                            <label>Does your home has a swimming pool? <span className='form-required'>*</span></label>
                            <label><input type="radio" onChange={this.onChangeHasPool} value="yes" checked={this.state.has_pool === "yes"} name="has-pool" />Yes</label>
                            <label><input type="radio" onChange={this.onChangeHasPool} value="no" checked={this.state.has_pool === "no"} name="has-pool" />No</label>
                        </div>

                        <button type="submit" className="btn btn-primary">Continue</button>
                    </form>
                </div>
            </div>
        );
    }
}
