import React, { Component } from 'react';
import { Logo, Grass } from '../images'
import './LandingPage.css'

class LandingPage extends Component {
    render() {
        return (
            <>
                <div className='wrapper'>
                    <img src={Grass} className='background' alt='background' />
                    <div className = 'bleh'>
                    <img className='logo' src={Logo} alt='logo' />
                    </div>
                    <div className='groundskeeper'>
                        <h1>Let over 500 local Groundskeepers sproose up your lawn</h1>
                    </div>
                    <div className='paragraph'>
                        <h3>
                            The gig economy has come to your front yard.
                        Sproosed is your next generation solution to on-demand lawn care.
                        Browse from our selection of registered local lawn care specialists
                        in your area available when you need them to do what you need done.
                         Grass, Brush, Overgrowth, Gardens, Weeding, Tree-removal, etc…
                         See in real time who matches your job requirements and pick the vendor that matches your budget.
                         Quick and easy payment systems and reviews help you save time, money and headaches.
            </h3>
                    </div>
                </div>
            </>
        )
    }
}

export default LandingPage