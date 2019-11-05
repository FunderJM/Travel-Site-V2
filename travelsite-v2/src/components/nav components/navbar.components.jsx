import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import larkbunting from '../../assets/larkbunting.png';
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
                            <Link to='/cart' className='nav-items'>
                                Cart
                            </Link>
                        </li>
                        <li className='navbar-list-item'>
                            <Link to='/booking' className='nav-items'>
                                Booking
                            </Link>
                        </li>
                        <li className='navbar-list-item'>
                            <Link to='/frequent_flyer' className='nav-items'>
                                Frequent Flying
                            </Link>
                        </li>
                        <li className='navbar-list-item'>
                            <Link to='/employement_application' className='nav-items'>
                                Careers
                            </Link>
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