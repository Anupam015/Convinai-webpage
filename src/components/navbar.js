import React, { Component } from 'react';
import Headroom from 'react-headroom';
import { IoChevronDownSharp } from 'react-icons/io5';
import logo from "../assets/images/logo.png";
import './navbar.css';

class Navbar extends Component {
    
    solutions = ['Sales Onboarding', 'Sales Training', 'People Intelligence', 'Process Monitoring', 'Market Intelligence', 'Sales Stategy',
        'Meeting Intelligence', 'For Sales Leader', 'For Sales Manager'];
    integration = ['Team Messaging', 'Video Conferencing', 'Calendar', 'Dialer', 'CRM'];
    resources = ['Blogs', 'E-Book', 'News', 'Case studies', 'Sales Gambit Podcast'];
    
    dropitem = (item, row) => {
        return (
            <div className='dropitem' style={{width: row? '50%':'100%'}}>
                <p style={{padding: '30px 20px'}} >{item}</p>
            </div>
        );
    }

    render() {        

        return(
            <Headroom>
                <div className='navbar'>
                    <div className='logo'>
                    <img src={logo} alt="logo" />
                    </div>
                    <div className='stickynav'>
                        <a href='https://www.convin.ai/pricing' >Pricing</a>
                        <div className='drop'>
                            <div className='dropdown' >
                                <div>Product Guide</div>
                                <IoChevronDownSharp style={{padding: 2, marginTop: 4, width: 20, height: 20}} />
                            </div>
                            <div className='dropdown-content' style={{width: '30%', marginLeft: '-150px'}}>
                                {this.solutions.map((item) => {
                                    return this.dropitem(item, true);
                                })}
                            </div>
                        </div>
                        <div className='drop'>
                            <div className='dropdown' >
                                <div>Integrations</div>
                                <IoChevronDownSharp style={{padding: 2, marginTop: 4, width: 20, height: 20}} />
                            </div>
                            <div className='dropdown-content' style={{width: '22%', marginLeft: '-80px'}}>
                                {this.integration.map((item) => {
                                    return this.dropitem(item, false);
                                })}
                            </div>
                        </div>
                        <div className='drop'>
                            <div className='dropdown' >
                                <div>Resources</div>
                                <IoChevronDownSharp style={{padding: 2, marginTop: 4, width: 20, height: 20}} />
                            </div>
                            <div className='dropdown-content' style={{width: '20%', marginLeft: '-200px'}}>
                                {this.resources.map((item) => {
                                    return this.dropitem(item);
                                })}
                            </div>
                        </div>
                        <a href='https://www.convin.ai/about-us'>About us</a>
                    </div>
                    <div className='right'>
                        <button className='book' style={{marginRight: '20px'}} onClick={() => {window.location.href='https://www.convin.ai/sign-up'}}>
                            Book a Demo
                        </button>
                        <button className='login' onClick={() => {window.location.href='https://app.convin.ai/?isUser=true'}}>
                            Sign Up
                        </button>
                    </div>
                </div>
                
            </Headroom>
        )
    }
}



export default Navbar;