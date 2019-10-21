import React from 'react';
import {airFlights} from '../../state';
import { FlightCardComp } from './flightcard.component';

export class ReturnFlightComp extends React.Component {
    constructor(){
        super();
        this.state = {
            flight: airFlights
        }
    }

    render() {
        return(
            <div id='flight-display-table'>
                <div id='flight-table-header'>
                    <div className='depart-info'>
                        <p>Departure (Location and Time)</p>
                    </div>
                    <div className='arrival-info'>
                        <p>Arrival (Location and Time)</p>
                    </div>
                    <div className='flight-info'>
                        <p>Travel Time (Approx. and Layovers)</p>
                    </div>
                    <div className='finance-info'>
                        <p>Price</p>
                    </div>
                </div>
                <div id='flight-table-main'>
                    {this.state.flight.map( flight => (
                        <FlightCardComp key={flight.departLoc} flight={flight} />
                    ))}
                </div>
            </div>
        )
    }
}