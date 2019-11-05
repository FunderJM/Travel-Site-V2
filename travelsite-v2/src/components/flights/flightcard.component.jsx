import React from 'react';
import './flightcard.css';
import { selectedFlight } from '../../state';

export class FlightCardComp extends React.Component {


    render(){

        const flight = this.props.flight;

        return(
            <div className='flight-card col-12 col-s-12' >
                <button className='flight-button' onClick={() => {selectedFlight.push(flight)}}>
                    <div className='depart-info'>
                        {/* <div id ='depart-loc' >{flight.departLoc}</div> */}
                        <div id='depart-time' >{flight.departTime}</div>
                    </div>
                    <div className='arrival-info'>
                        {/* <div id='arrival-loc' >{flight.arrivalLoc}</div>                 */}
                        <div id='arrival-time' >{flight.arrivalTime}</div>
                    </div>
                    <div className='flight-info'>
                        <div id='travel-time' >{flight.travelTime}</div>
                        {/* <div id='layovers' >{flight.layovers}</div> */}
                    </div>
                    <div className='finance-info'>
                        <div id='price' >{flight.price}</div>
                    </div>
                </button>
            </div>
        )
    }
}