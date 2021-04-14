import React from 'react'
import './EndOfLeaseClean.css'
import Readybook from '../../Components/Materials/Readybook/Readybook'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import StarIcon from '@material-ui/icons/Star';
import {
    TextField,
    
} from '@material-ui/core'

import PriceInd from '../pages/PagesComponents/Prices/PricesInd'
import Overview from '../Materials/Overview/Overview'
import OverviewContents from '../Materials/Overview/OverviewContents'
import AccordionPrice from '../Materials/Accordion/AccordionPrice'
import FooterNew from '../pages/PagesComponents/FooterNew'

export default function EndOfLeaseClean() {
    return (
        <div className="endoflease">
            <div className="first_opacity">
                <div className="first_display">
                <div className="title_display">Professional End of Tenancy Cleaning in Melbourne</div>
                <div className="title_properties">
                <ul>
                    <li><CheckCircleOutlineIcon/>{' '}Professional and eco-friendly detergents provided by leading manufacturers.</li>
                    <li><CheckCircleOutlineIcon/>{' '}Specialised dip tanks to remove grease and dirt from your oven.</li>
                    <li><CheckCircleOutlineIcon/>{' '}No-exactly time limits per job. The cleaners usually leaves after confirmation of job done.</li>
                    <li><CheckCircleOutlineIcon/>{' '}Mostly appliances are cleaned as per of your service.</li>
                    <li><CheckCircleOutlineIcon/>{' '}Key-pickup-dropoff services provided to ensure more convenient and security to the property.</li>
                    <li><CheckCircleOutlineIcon/>{' '}Skill and and most compenetent cleaning staff members</li>
                </ul>
                </div>
                <p>From $100*</p>
                
                
                <div className="post_code"><TextField  fullWidth = "false" label="Enter your postcode" color="primary"  required="true" size="small" />
</div>
                <div className="first_button">
                    Check prices & availability
                </div>
                <div className="rating">
                    <div className="star">
                    <StarIcon style={{color:'#febf00'}}/>
                    <StarIcon style={{color:'#febf00'}}/>
                    <StarIcon style={{color:'#febf00'}}/>
                    <StarIcon style={{color:'#febf00'}}/>
                    <StarIcon style={{color:'#febf00'}}/>
                    </div>
                    <p>4.5 ratings from</p>
                    <img src={'https://www.chatmeter.com/wp-content/uploads/2018/02/Google-Joins-Fight-Against-Review-Solicitation-Chatmeter-300x129.jpg'} />
                </div>
                </div>
            </div>


            <Overview/>
            <OverviewContents/>
            <AccordionPrice/>
           
            <Readybook/>
            <FooterNew/>
        </div>
    )
}
