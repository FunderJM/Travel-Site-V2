import React from 'react';
import './social.css';
import facebook from '../../assets/facebook.png';
import insta from '../../assets/instagram.png';
import linkedin from '../../assets/linkedin.png';
import twitter from '../../assets/twitter.png';

export class SocialLinksComp extends React.Component {
    render(){
        return(
            <div className='social-links'>
                <img className='social' src={facebook} alt = 'facebook' />
                <img className='social' src={insta} alt = 'instagram' />
                <img className='social' src={linkedin} alt = 'linked-in' />
                <img className='social' src={twitter} alt = 'twitter' />
            </div>
        )
    }
}