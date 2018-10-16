import React, {Component} from 'react';

export default class MessageComponent extends Component{
    render(){
        return(
            <div className="container mt-3 mb-3">
                <div className="row">
                    <div className="col-md-12 text-center">

                    <div className={`alert alert-${this.props.className}`} role="alert">
                        <strong>{this.props.type}!</strong> {this.props.message}.
                    </div>

                    </div>
                </div>
            </div>
        )
    }
}
