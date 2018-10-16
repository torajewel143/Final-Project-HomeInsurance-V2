import React, {Component} from 'react';

export default class ResidencyTypeComponent extends Component{
    render(){
        switch (this.props.id / 1) {
            case 1:
                return(<div className="residency-type">Single Family Home</div>)
            case 2:
                return(<div className="residency-type">Condo</div>)
            case 3:
                return(<div className="residency-type">Townhouse</div>)
            case 4:
                return(<div className="residency-type">Rowhouse</div>)
            case 5:
                return(<div className="residency-type">Duplex</div>)
            case 6:
                return(<div className="residency-type">Apartment</div>)
            default:
                return(<div className="residency-type"></div>)
        }
    }
}
