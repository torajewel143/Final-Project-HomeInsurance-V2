import React, {Component} from 'react';

export default class ResidencyUseComponent extends Component{
    render(){
        switch (this.props.id / 1) {
            case 1:
                return(<div className="residency-use">Primary</div>)
            case 2:
                return(<div className="residency-use">Secondary</div>)
            case 3:
                return(<div className="residency-use">Rental</div>)
            default:
                return(<div className="residency-use"></div>)
        }
    }
}
