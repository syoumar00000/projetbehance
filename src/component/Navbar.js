import React, { Component } from 'react';
import {FaAlignRight} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import {BsSearch} from "react-icons/bs";
import {FaCartArrowDown} from "react-icons/fa"

export default class Navbar extends Component {
    state={
        isOpen:false
    }
    handleToggle = () =>{
        this.setState({isOpen: !this.state.isOpen})
    }
    render() {
        return (
            <div className="container-fluid">              
                <nav className="navbar"> 
                <div className="row">
                <div className="col-lg-12 maCouleur"> 
                    <div className="nav-center">
                            <div className="nav-header"> 
                            <h4 className="monTitle">
                                <a >
                                <span className="spantt"> COMPANY </span> <span>LOGO</span>
                                </a>
                                </h4>
                            <button type="button" className="nav-btn" onClick ={this.handleToggle}>
                                <FaAlignRight className="nav-icon"/>
                            </button>
                            </div>
                        <div className="row">
                            <div className="col-lg-12 menuhaut">
                            <ul className={this.state.isOpen?"nav-links show-nav":"nav-links"}>
                                <li>
                                    <a>HOME</a>
                                </li>
                                <li>
                                    <a>ABOUT US</a>
                                </li>
                                <li>
                                    <a>PORTFOLIO</a>
                                </li>
                                <li>
                                    <a>FEATURES</a>
                                </li>
                                <li>
                                    <a>BLOG</a>
                                </li>
                                <li>
                                    <a>SHOP</a>
                                </li>
                                <li>
                                    <a>CONTACT</a>
                                </li>
                                <BsSearch className="iconsearch"> </BsSearch>
                                <FaCartArrowDown className="iconsmarket"></FaCartArrowDown>
                            </ul>                             
                            </div>    
                        </div>
                    </div>
                    <div className="row  texte">
                            <div className="col-lg-2"></div>
                                <div className="col-lg-5 ">
                                    <h1>
                                        THE COMPANY <span>TITLE</span> AND <span>SLOGAN</span> GOES HERE
                                    </h1>
                                    &nbsp;&nbsp;&nbsp;
                                    <p>
                                        Plush pillows and breathable bed linens 
                                        Soft, oversized bath towels 
                                        Full-sized, pH-balanced toiletries 
                                        Complimentary refreshments 
                                        Adequate safety/security  
                                    Internet Comfortable beds.
                                    Plush pillows and breathable bed linens 
                                        Soft, oversized bath towels 
                                        Full-sized, pH-balanced toiletries 
                                        Complimentary refreshments 
                                        Adequate safety/security  
                                    Internet Comfortable beds.
                                    Plush pillows and breathable bed linens 
                                        Soft, oversized bath towels 
                                        Full-sized, pH-balanced toiletries 
                                        Complimentary refreshments 
                                        Adequate safety/security  
                                    Internet Comfortable beds.
                                    </p>
                                    &nbsp;&nbsp;&nbsp;
                                    <button type="button" className="btn btn-warning">PURCHASE NOW</button>
                                    &nbsp;  &nbsp;  &nbsp;
                                    <button type="button" className=" btn btn-outline-warning">CONTACT US</button>
                            </div>
                            <div className="col-lg-5 monImage">
                                
                            </div>
                    </div>     
                    </div>
                </div>    
                </nav>
               
                
         </div>
         );
        
    }
}


