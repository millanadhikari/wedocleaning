import React from 'react'
import './Footer.css'
import {Link} from 'react-router-dom'
import MobileFooter from './MobileFooter'


function Footer() {
    return (
        <div className="footer">
            <div className="footer_links">
            <div className="footer_one">
            <div className="footer_title">HELP & INFORMATION</div>
            <div className="footer_description">
                <ul>
                    <li>Home</li>
                    <li>Services</li>
                    <li>Prices</li>
                    <li>Blog</li>
                    <li>Reviews</li>
                    <li>About</li>
                    <li>Privacy Policy</li>
                    <li>Terms of Use</li>
                    <li>Cookies Policy</li>
                </ul>
            </div>
            </div>

           <div className="footer_two">
            <div className="footer_title">OUR SERVICES</div>
            <div className="footer_description">
                <ul>
                    <li>Domestic Cleaning</li>
                    <li>Carpet Cleaning</li>
                    <li>End of Tenancy Cleaning</li>
                    <li>Window Cleaning</li>
                    <li>Antiviral Sanitisation</li>
                    <li>Upholstery Cleaning</li>
                    <li>Oven Cleaning</li>
                    <li>After Builders Cleaning</li>
                    <li>Office Cleaning</li>

                </ul>
            </div>
            </div>

            <div className="footer_three">
            <div className="footer_title">BECOME A TEAM MEMBER</div>
            <div className="footer_description">
                <p>If you are passionate about cleaning and want to join us?</p>
            </div>
            <div className="join_button">
               JOIN US
            </div>
            </div>
            </div>
            <div className="footer_four">
            <div className="footer_description">
                <p>(c) 2010-2020 By WeServe Cleaners Australia. All rights reserved.</p>
                
            </div>
            
            </div>
            <MobileFooter/>
            {/* <div className="mobile_links">
                <ul>
                    <li>Home</li>
                    <li>Services</li>
                    <li>Prices</li>
                    <li>Blog</li>
                    <li>Reviews</li>
                    <li>About</li>
                    <li>Privacy Policy</li>
                    <li>Terms of Use</li>
                </ul>
            </div> */}

            

        </div>
    )
}


export default Footer


// <div className="footer">
//           <div className="footer_left">
//               <div className="help">
//                   <div className="help_title">
//                   <Link to='/Home' className="footer_menu" >
//                            HELP INFORMATION
//                         </Link>
//                   </div>
//                   <div className="help_list">
//                       <ul>
//                       <li className="nav-item">
//                         <Link to='/Home' className="footer_menu" >
//                             <p>Home</p>
//                         </Link>
//                     </li>
//                     <li className="nav-item" >
//                         <Link to='/services' className="footer_menu"  >
//                             <p>Services</p>
//                         </Link>
//                     </li>
//                     <li className="nav-item" >
//                         <Link to='/Home' className="footer_menu" >
//                            Prices
//                         </Link>
//                     </li>
//                     <li className="nav-item" >
//                         <Link to='/Home' className="footer_menu"  >
//                            WeServe Club
//                         </Link>
//                     </li>
//                     <li className="nav-item" >
//                         <Link to='/Home' className="footer_menu"  >
//                            Blog
//                         </Link>
//                     </li>
//                     <li className="nav-item" >
//                         <Link to='/Home' className="footer_menu"  >
//                            Reviews
//                         </Link>
//                     </li>
//                     <li className="nav-item">
//                         <Link to='/Home'  className="footer_menu" >
//                            About
//                         </Link>
//                     </li>
//                     <li className="nav-item" >
//                         <Link to='/Home' className="footer_menu" >
//                            Privacy Policy
//                         </Link>
//                     </li>
//                     <li className="nav-item" >
//                         <Link to='/Home' className="footer_menu" >
//                            Terms of use
//                         </Link>
//                     </li>
//                     <li className="nav-item" >
//                         <Link to='/Home'  className="footer_menu">
//                            Cookies Policy
//                         </Link>
//                     </li>
                            
//                           </ul>
//                   </div>
//               </div>
//               <div className="services"></div>
//               <div className="trademark"></div>
//               <div className="end_logo"></div>


//           </div>
//           <div className="footer_right">
//           <div className="help">
//                   <div className="help_title" >
//                   <Link to='/Home' className="footer_menu" >
//                            OUR SERVICES
//                         </Link>
//                   </div>
//                   <div className="help_list">
//                       <ul>
//                       <li className="nav-item">
//                         <Link to='/Home' className="footer_menu">
//                            General Cleaning
//                         </Link>
//                     </li>
//                     <li className="nav-item">
//                         <Link to='/services' className="footer_menu" >
//                             Carpet Cleaning
//                         </Link>
//                     </li>
//                     <li className="nav-item" >
//                         <Link to='/Home' className="footer_menu" >
//                            End of Tenancy Cleaning
//                         </Link>
//                     </li>
//                     <li className="nav-item" >
//                         <Link to='/Home' className="footer_menu"  >
//                            Window Cleaning
//                         </Link>
//                     </li>
//                     <li className="nav-item">
//                         <Link to='/Home' className="footer_menu" >
//                            Antivirial Sanitisation
//                         </Link>
//                     </li>
//                     <li className="nav-item">
//                         <Link to='/Home' className="footer_menu"  >
//                            Oven Cleaning
//                         </Link>
//                     </li>
//                     <li className="nav-item">
//                         <Link to='/Home' className="footer_menu" >
//                            Upholstery Cleaning
//                         </Link>
//                     </li>
//                     <li className="nav-item">
//                         <Link to='/Home' className="footer_menu" >
//                            After Builders Cleaning
//                         </Link>
//                     </li>
//                     <li className="nav-item">
//                         <Link to='/Home' className="footer_menu" >
//                            Hard Floor Cleaning
//                         </Link>
//                     </li>
//                     <li className="nav-item">
//                         <Link to='/Home' className="footer_menu" >
//                            Office Cleaning
//                         </Link>
//                     </li>
                            
//                           </ul>
//                   </div>
//               </div>
//           </div>
            
//         </div>
