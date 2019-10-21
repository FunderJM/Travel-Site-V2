import React from 'react';
import { TravelFormComp } from '../forms/travelform.component';
import { DepartureFlightComp } from '../flights/departure.component';
import { ReturnFlightComp } from '../flights/return.component';

export class HomeComp extends React.Component {
    constructor(){
        super();
        this.state={
            TypeofTrip: 'round-trip'
        }
    }

    // if(this.TravelFormComp.props.tripType === 'one-way') {
    //     this.ReturnFlightComp.display = 'none';
    // } else {
    //     this.ReturnFlightComp.display = 'block';
    // }

    render(){
        return(
            <div className='full-page col-9 col-s-12'>
                <div className='home-contain'>
                    <TravelFormComp />
                    <div className='flights-dep'>
                    <DepartureFlightComp />
                    </div>
                    <div className='flights-return'>
                    <ReturnFlightComp />
                    </div>
                </div>
            </div>
        )
    }
}