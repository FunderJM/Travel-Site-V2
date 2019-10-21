import React from 'react';
import { Link } from 'react-router-dom';
// import larkbunting from '../../assets/larkbunting.png';
import { SplashCarousel } from './splashcarousel.component';
import { SocialLinksComp } from '../social links/social.component';

export class SplashPageComp extends React.Component {

    render() {
        return(
            <div className='full-page' id='splash-main'>
                <div className='main-content' id='splash-main'>
                    <SplashCarousel />
                    {/* <h2>Welcome to Bunting Airlines</h2>
                    <img id='splash-img' src={larkbunting} alt='lark bunting' />
                    <h4>Fly Higher with Us!</h4>
                    <Link to="/home">
                        <button id="welcome-button" type="submit">Continue</button>
                    </Link> */}
                    <div className='media-contact'>
                        <h1>Follow us on Social Media</h1>
                        <SocialLinksComp id='splash-soc' />
                    </div>
                </div>
            </div>
        )
    }
}