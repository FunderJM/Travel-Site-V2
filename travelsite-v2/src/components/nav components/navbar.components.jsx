import React from 'react';
import { Link } from 'react-router-dom';
import larkbunting from '../../assets/larkbunting.png';
import { SocialLinksComp } from '../social links/social.component';
import menu from '../../assets/Menu.png';

export class NavbarComp extends React.PureComponent {
    render() {
        return(
            <div className='navbar'>
                <div className='navbar-left'>
                    <ul id='nav-list'>
                        <li className='navbar-list-item'>
                            <Link to='' className='img-placeholder'>
                                <img id='navbar-img' src={larkbunting} alt='lark bunting' />
                                Bunting Airlines
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='navbar-right'>
                    <ul id='nav-list'>
                        <li className='navbar-list-item'>
                            <Link to='/home' className='nav-items'>
                                Home
                            </Link>
                        </li>
                        <li className='navbar-list-item'>
                            <Link to='/home' className='nav-items'>
                                About Us
                            </Link>
                        </li>
                        <li className='navbar-list-item'>
                            <Link to='/home' className='nav-items'>
                                Legal
                            </Link>
                        </li>
                        <li className='navbar-list-item'>
                            <Link to='/employement_application' className='nav-items'>
                                Careers
                            </Link>
                        </li>
                        <li className='navbar-list-item'>
                            <Link to='/home' className='nav-items'>
                                Contact Us
                            </Link>
                        </li>
                        <li className='navbar-list-item'>
                            <SocialLinksComp />
                        </li>
                    </ul>
                </div>
                <div id='nav-icon'>
                    <image src={menu} alt='menu' />
                </div>              
            </div>
        )
    }
}