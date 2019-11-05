import React from 'react';
import './legal.css';
import {Link} from 'react-router-dom';
import { SocialLinksComp } from '../social links/social.component';

export class LegalComp extends React.PureComponent {
    render() {
        return(
            <div className='legal-contact'>
                <div className='legal-terms'>
                    <div>Terms and Conditions apply to all services and benefits.</div>
                    <div>© 2019 ProKarma, Inc. | Travel may link through other airlines</div>
                </div>
                <div className='legal-us'>
                    <ul className='legal-list'>
                        <li className='legal-list-item'>
                            <Link to='/home' className='legal-items'>
                                Legal
                            </Link>
                        </li>
                        <li className='legal-list-item'>
                            <Link to='/home' className='legal-items'>
                                About Us
                            </Link>
                        </li>
                        <li className='legal-list-item'>
                            <Link to='/home' className='legal-items'>
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>
                <SocialLinksComp />
            </div>
        )
    }
}