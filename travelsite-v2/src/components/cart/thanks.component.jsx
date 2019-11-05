import React from 'react';
import { selectedFlight } from '../../state';
import { FlightCardComp } from '../flights/flightcard.component';

export class ThankComp extends React.Component {

    constructor(){
        super();
        this.state = {
            inCart: selectedFlight
        }
    }

    render() {
        return(
            <div className='main-content col-9 col-s-12'>
                <h1>Thank you for booking with us!</h1>
                <h3>Your order number is #764285193</h3>
                <div>
                    {this.state.inCart.map( flight => (
                        <FlightCardComp key={flight.departLoc} flight={flight} />
                    ))}
                </div>
            </div>
        )
    }
}