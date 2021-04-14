import React, {useState} from 'react'
import './Navbar.css'
import {Button} from '../Button/Button'
import {Link} from 'react-router-dom'
import Rightnav from './Rightnav/Dropdown'
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import Callbutton from '../Materials/Callbutton'
import { AiTwotoneHome } from "react-icons/ai";
import{FaClipboardList} from "react-icons/fa"

import{MdContactPhone} from"react-icons/md"



function Navbar() {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const onMouseEnter = () => {
        if(window.innerWidth < 960) {
            setDropdown(false)
        } else {
            setDropdown(true)
        }
    };

    const onMouseLeave = () => {
        if(window.innerWidth < 960) {
            setDropdown(false)
        } else {
            setDropdown(false)
        }
    };    

    return ( 
        
            <nav className='navbar'>
                <Link to='/' className='navbar-logo'>
                     <div className="logo"></div>

                     {/* <i class='fab fa-firstdraft'></i> */}

                </Link>
                <div className="mobile_right">

                <div className="mobile_call">
                    <Callbutton/>
                </div>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
                </div>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                           <div className="mobile_logo"><AiTwotoneHome/></div> HOME
                        </Link>
                    </li>
                    <li className="nav-item" onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}>
                        <Link to='/services' 
                              className='nav-links' 
                              onClick={closeMobileMenu}>
                        <div className="mobile_logo"><FaClipboardList/></div>
                            SERVICES <i className='fas fa-caret-down'/>
                        </Link>
                        {dropdown && <Rightnav/>}
                    </li>
                    <li className="nav-item">
                        <Link to='/contact-us' className='nav-links' onClick={closeMobileMenu}>
                        <div className="mobile_logo"><MdContactPhone/></div>

                            CONTACT US
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/blogs' className='nav-links' onClick={closeMobileMenu}>
                        <div className="mobile_logo"><AiTwotoneHome/></div>
                            BLOGS
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/bookonline' className='nav-links-mobile' onClick={closeMobileMenu}>
                            BOOK ONLINE
                        </Link>
                    </li>
                    

                </ul>
                <div className="animated_call"><Callbutton/></div>
                <div className="call_button">
                    <PhoneInTalkIcon className="phone"/> 02 9418 5488
                    
                <Button/>
                </div>

            </nav>
        
    )
}

export default Navbar
