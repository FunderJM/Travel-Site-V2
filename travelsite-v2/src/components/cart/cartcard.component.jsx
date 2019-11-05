import React from 'react';
import { Link } from 'react-router-dom';
import remove_icon from '../../assets/removeicon.png';
import { selectedFlight } from '../../state';

export class CartCardComp extends React.Component {


    render(){

        const flight = this.props.flight;

        // function removeFlight() {
        //     selectedFlight.splice(flight,1)
        // }

        return(
            <div className='cart-card col-9 col-s-12'>
                <div className='depart-info'>
                    <div id ='depart-loc' >{flight.departLoc}</div>
                    <div id='depart-time' >{flight.departTime}</div>
                </div>
                <div className='arrival-info'>
                    <div id='arrival-loc' >{flight.arrivalLoc}</div>                
                    <div id='arrival-time' >{flight.arrivalTime}</div>
                </div>
                <div className='flight-info'>
                    <div id='travel-time' >{flight.travelTime}</div>
                    <div id='layovers' >{flight.layovers}</div>
                </div>
                <div className='finance-info'>
                    <div id='price' >{flight.price}</div>
                </div>
                <div className='remove-button'>
                    <Link to='/cart'>
                    <button className='flight-remove-button' type='submit' onClick={() => {selectedFlight.splice(flight,1)}}>
                    <img id='red-x' src={remove_icon} alt='red x' />
                    </button>
                    </Link>
                </div>
            </div>
        )
    }
}