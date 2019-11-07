import React from 'react';
import './cart.css';
import { Link } from 'react-router-dom';
import { CartCardComp } from './cartcard.component';
import { selectedFlight } from '../../state';


export class CartComp extends React.Component {

    constructor(){
        super();
        this.state = {
            inCart: selectedFlight
        }
    }

    

    render(){
        return(
            <div className='main-content col-9 col-s-12 cart-contain'>
                <div className='cart-purchase'>
                    <button className='cart-button' type='submit' onClick={() => {selectedFlight.splice(0,selectedFlight.length)}}>
                        <Link id='cart-link' to='/cart'>
                            Remove All Items
                        </Link>
                    </button>
                </div>
                <div className='cart-contain'>
                    {this.state.inCart.map( flight => (
                        <CartCardComp key={flight.flightId} flight={flight} />
                    ))}
                </div>
                <div className='cart-purchase'>
                    <button className='cart-button' type='submit'>
                        <Link id='cart-link' to='/thank_you'>
                            Purchase
                        </Link>
                    </button>
                </div>                
            </div>
        )
    }
}