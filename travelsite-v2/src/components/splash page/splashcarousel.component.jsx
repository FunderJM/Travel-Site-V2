import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import larkbunting  from '../../assets/larkbunting.png';
import beachfront from '../../assets/beachfront.png';
import city from '../../assets/city.png';
import plane2 from '../../assets/plane2.png';
import { Link } from 'react-router-dom';

export class SplashCarousel extends React.Component {
    render() {
        return(
            <Carousel
                className='splash-carousel'
                showStatus={false}
                showThumbs={false}
                autoPlay={true}
                infiniteLoop={true}
                stopOnHover={false}
                interval={5000}
            >
                <div className='carousel-slide'>
                    <Link to='/home'>
                        <img className='carousel-image' src={larkbunting} alt='lark bunting'/>
                        <div id='carousel-bunting' className='carousel-text'>
                            <h1 className='airline-name'>Bunting Airlines</h1>
                            <h3 className='airline-slogan'>Fly Higher with Us!</h3>
                        </div>
                    </Link>
                </div>
                <div className='carousel-slide'>
                    <Link to='/home'>
                        <img className='carousel-image' src={beachfront} alt='beach front'/>
                        <div id='getaway-box' className='carousel-text'>
                            <h1 className='getaway-head'>Need a Getaway?</h1>
                            <h3 className='getaway-text'>Schedule with us Today!</h3>
                        </div>
                    </Link>
                </div>
                <div className='carousel-slide'>
                    <Link to='/home'>
                        <img className='carousel-image' src={city} alt='city'/>
                        <div id='business-box' className='carousel-text'>
                            <h1 className='business-head'>Flying on Business?</h1>
                            <h3 className='business-text'>Book your next business trip with us.</h3>
                        </div>
                    </Link>
                </div>
                <div className='carousel-slide'>
                    <Link to='/employement_application'>
                        <img className='carousel-image' src={plane2} alt='plane'/>
                        <div id='career-box' className='carousel-text'>
                            <h1 className='career-head'>Looking for a Career?</h1>
                            <h3 className='career-text'>Apply Today!!! And fly higher with us!</h3>
                        </div>
                    </Link>
                </div>
            </Carousel>
        )
    }
}