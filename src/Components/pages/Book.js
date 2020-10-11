import React, {useState, useEffect} from 'react'
import './Book.css'
import { FcSearch } from "react-icons/fc"
import { FaLandmark } from "react-icons/fa"
import { GiGloves, GiVacuumCleaner, GiBottledBolt} from "react-icons/gi"
import Dropshadow from '../Dropshadow/Dropshadow'




function Book() {

    const [click, setClick] = useState(false);
    const [input, setInput] = useState("");

    let services = [
        { title:"End of Lease Cleaning", location:"In Cleaning", name:<FaLandmark/>},
        { title:"Domestic Cleaning", location:"In Cleaning", name:<GiGloves/>},
        { title:"Carpet Cleaning", location:"In Cleaning", name: <GiVacuumCleaner/>},
        { title:"Mould Removal", location:"In Cleaning", name:<GiBottledBolt/>},
    ]

   

    const handleClick = () => setClick(!click)

    const displaytoggle = () => {

   
        if(click) {
            return(
                <div className="services_options">
                <div className="services_main">
                  {services.map((service, index) => {
                      return(
                        <div key={index} className="service_one">
                        <ul>
                        <div className="logo_container">
                         {service.name}
                         </div>
                         <div className="title_container">
                      <li>{service.title} </li>
                      <p>{service.location}</p>
                      </div>
                        </ul>
                    </div>
                      )
                  })}
                 
                </div>
            </div>
            )
        }
    }

    const handleChange = (e) => {
        e.preventDefault();
        setInput(e.target.value);
    };

    // const hasMatch = () => {
    //     if(input.length > 0) {
    //         services = services.filter((i) => {
    //             return i.title.match(input)
    //         }
    //         )}
    //     return (
            

    //     )
    // }   
    
    const hasNomatch = () => {

    }
    if(input.length > 0) {
        services = services.filter((i) => {
            return i.title.match(input)
        }
        )}
   
    

    return (
        <div className="book">
            <div className="book_title">Book a service for your <strong>home, office </strong>or<strong> garden</strong></div>
            <p>in less than 25 seconds</p>
            <div onClick={handleClick} className="book_input">
                <div className="logo_input"><FcSearch/></div>
                <input 
                    type="text" 
                    placeholder="What do you need help with?"
                    onChange={handleChange}
                    value={input}>
                </input>
            </div>
            {displaytoggle()}
        </div>
    )
}

export default Book
