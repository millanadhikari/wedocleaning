import React from 'react'
import './EndOfLeaseClean.css'
import Footer from '../Footer/Footer'
import Readybook from '../../Components/Materials/Readybook/Readybook'
import Faq from '../pages/PagesComponents/Faq'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import {
    TextField,
    
} from '@material-ui/core'

import PriceInd from '../pages/PagesComponents/Prices/PricesInd'

export default function EndOfLeaseClean() {
    return (
        <div className="endoflease">
            <div className="first_display">
                <div className="first_opacity">
                <div className="title_display">Professional End of Tenancy Cleaning in Sydney</div>
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
                </div>
            </div>
            <div className="main_end">
                <div className="main_image">
                    <img src={'https://isteam.wsimg.com/ip/04cfdf97-cccb-40d5-8b06-0d31a97f2dd0/76e75c60-3d54-4f8b-8a31-5b39bd7ef48d.JPG/:/'} alt=""/>
                </div>
                <div className="main_title">
                <div className="title">BEST END OF LEASE CLEANING SERVICES IN MELBOURNE</div>
                <div className="melbourne">
                <p>LOOKING FOR END OF LEASE CLEANING IN MELBOURNE?</p>

                </div>
                <p>If you are looking for best End of Lease Cleaning Service Sydney. Well, Look no more Weserve Cleaning Services might just be exactly what you are looking for. We are a dedicated End of Lease Cleaning team in Melbourne with our major target for every cleaning service we provide is to have a satisfied client. Our fully trained professional  team will provide with excellent service and also brings years of experience in End of Lease Cleaning  which enable us to provide best End of Lease cleaning Service in Melbourne without missing a  spot.</p>
                <div className="second_title">What Services are included in  END OF LEASE CLEANING SERVICE?</div>
                <p>Professional cleaning stands for high-end equipment and detergents combined with thorough know-how. WeServe cleaners' end of tenancy cleaning ensures that the post-rental condition of the property meets your landlord's expectations. Following are the services/checklist for end of lease cleaning:</p>
                <ul>
                    <li>Professional and eco-friendly detergents provided by leading manufacturers.</li>
                    <li>Specialised dip tanks to remove grease and dirt from your oven.</li>
                    <li>No-exactly time limits per job. The cleaners usually leaves after confirmation of job done.</li>
                    <li>Mostly appliances are cleaned as per of your service.</li>
                    <li>Key-pickup-dropoff services provided to ensure more convenient and security to the property.</li>
                    <li>Skill and and most compenetent cleaning staff members</li>
                </ul>
                <p>You can also book additional Carpet or Upholstery Cleaning.  So don’t hesitate to book our services and our professional  cleaners will do the magic for you! We will provide all of the required  equipment and detergents to achieve the best results possible in our  services!</p>
            </div>
                </div>
            <PriceInd/>
            <Faq/>
            <Readybook/>
            <Footer/>
        </div>
    )
}
