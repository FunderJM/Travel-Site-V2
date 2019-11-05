import React from 'react';
import './booking.css';
import { TravelFormComp } from '../travel form/travelform.component';

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
                <div className='book-contain'>
                    <TravelFormComp />
                </div>
            </div>
        )
    }
}