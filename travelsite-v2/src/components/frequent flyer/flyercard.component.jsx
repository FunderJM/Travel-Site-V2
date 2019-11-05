import React from 'react';

export class FreqFlyerCard extends React.Component {
    render() {

        const points = this.props.points;

        return(
            <div id={points.type} className='flyer-card'>
                <div className='flyer-type'>{points.type}</div>
                <div className='flyer-calc'>
                    <div className='flyer-value'>{points.value} <br />
                        (pts per $)                    
                    </div>
                    <div className='calc-x'> x </div>
                    <div className='flyer-examp'>{points.example} <br />
                        (base fair price)
                    </div>
                </div>
                <div className='flyer-total'>= {points.total} pts total</div>
            </div>
        )
    }
}