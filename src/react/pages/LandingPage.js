import React, { Component } from 'react';
import { Logo, Grass } from '../images'
import Button from '@material-ui/core/Button';
import './LandingPage.css'
import { NavLink } from 'react-router-dom'


class LandingPage extends Component {
    render() {
        return (
            <>
                <div className='wrapper'>
                    <img src={Grass} className='background' alt='background' />
                    <div className='imageHolder'>
                        <img className='logo' src={Logo} alt='logo' />
                    </div>
                    <div className='groundskeeper'>
                        <h3>Let over 500 local Groundskeepers sproose up your lawn</h3>
                    </div>
                    <div className='paragraph'>
                        <h4 className="company-description">
                            The gig economy has come to your front yard.
                        Sproosed is your next generation solution to on-demand lawn care.
                        Browse from our selection of registered local lawn care specialists
                        in your area available when you need them to do what you need done.
                         Grass, Brush, Overgrowth, Gardens, Weeding, Tree-removal, etc…
                         See in real time who matches your job requirements and pick the vendor that matches your budget.
                         Quick and easy payment systems and reviews help you save time, money and headaches.
            </h4>
                        <Button variant='contained' color='primary' className="login-btn"><NavLink className='login-link' to='/login'>LOG IN</NavLink></Button>
                        <p className='or'>or</p>
                        <Button variant='contained' color='default' className="signup-btn"><NavLink className='signup-link' to='/register'>SIGN UP</NavLink></Button>
                    </div>
                </div>
            </>
        )
    }
}

export default LandingPage