import React, {useState} from 'react'
import './Services.css'
import Prices from '../pages/PagesComponents/Prices/Prices'
import { GiGloves, GiVacuumCleaner, GiBottledBolt} from "react-icons/gi"
import { FaLandmark } from "react-icons/fa"
import styled, { css } from 'styled-components'
import Footer from '../Footer/Footer'
import Readybook from '../Materials/Readybook/Readybook'






export default function Services() {
    const types = ['Domestic', 'Carpet', 'EndofLease', 'Mould-Removal']
    const [selectService, setselectService] = useState(types[0])
    const [services, setServices] = useState({
        selectedServices : 'Domestic'
});

    const Button = styled.button`
     width: 260px;
     padding: 10px 10px 10px 10px;
     cursor: pointer;
     display:flex;
     justify-content: left;
     margin-bottom: 10px;
     background-color: white;
     border:none;
    `;

    const ButtonToggle = styled(Button)`
     opacity: 0.6;
    ${({ active }) =>
    active &&
    `
    opacity: 1;
    border-left: 4px solid #057ec0;
    background-color:#e8e8e8;
    `}
    `;

    const cardSelector = () => {
        const toActivate = (type) => {
            setselectService(type)
        }

        const toPrice = (type) => {
            setServices({selectedServices:type})
            console.log(setServices)
        }

        const logo = (type) => {
            if(type === 'Domestic') {
                return <GiGloves/>
            }
            if (type === 'Carpet') {
                return <GiVacuumCleaner/>
            }
            if (type === 'EndofLease') {
                return <FaLandmark/>
            }
            if (type === 'Mould-Removal') {
                return <GiBottledBolt/>
            }
        }
          

        return(
             <div className="card_selector"  >
                 {types.map(type => (
                     <ButtonToggle
                     className="service"
                        key={type}
                        active={selectService ===type}
                        onClick={() => {
                            toActivate(type)
                            toPrice(type)                }}
                       >
                        <div className="button_container">
                            <div className="logo_services">{logo(type)}</div>
                            <div className="card_services">
                                <div className="title">{type}</div>
                                <div className="price">Prices from $25/h</div></div></div>
                          
                       
                        </ButtonToggle>

                 ))}

        
        </div>)}
        
        
  
    return (
        <div className="container">
       <div className="services">
           <p>Click on your service below to view its detailed price list</p>
        <div className="services_container">
       <div className="services_option">
           {cardSelector()}
       </div>
       <div className="services_price">
        <Prices services={services}/>

       </div>
       </div>
       
   </div>
   <div className="footer">
    <Readybook/>
   <Footer/>
   </div>
   </div>
    )
}


