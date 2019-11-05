import React from 'react';
import './freqflyer.css';
import bunting2 from '../../assets/bunting2.png';
import { freqFlyer } from '../../state';
import { FreqFlyerCard } from './flyercard.component';

export class FrequentFlyerComp extends React.Component {


    constructor(){
        super();
        this.state = {
            flyerpoints: freqFlyer
        }
    }

    render(){
        return(
            <div className='main-content col-9 col-s-12'>
                <div>
                    <img id='flyer-image' src={bunting2} alt='lark bunting' />
                </div>
                <div>
                    <h4>Earn Points for every flight</h4>
                    <p>You can earn points based on both the type of fair, and how much you pay.
                         Taxes and other non airline specific fees do not count towards your
                         points. Your points never expire, and with no black out dates. Use them
                          when you want to.
                    </p>
                </div>
                <div className='flyer-display'>
                    {this.state.flyerpoints.map( points => (
                        <FreqFlyerCard key={points.type} points={points} />
                    ))}
                </div>
            </div>
        )
    }
}