import React, { useState, useEffect } from 'react'
import './Book.css'
import { FcSearch } from "react-icons/fc"
import { FaLandmark } from "react-icons/fa"
import { GiGloves, GiVacuumCleaner, GiBottledBolt } from "react-icons/gi"
import Dropshadow from '../Dropshadow/Dropshadow'
import DropbackOverlay from './DropbackOverlay'





function Book() {
    const [loading, setLoading] = useState(false)

    const [click, setClick] = useState(false);
    const [input, setInput] = useState('')

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 5000)
    }, [])

    let services = [
        { title: "End of Lease Cleaning", location: "In Cleaning", name: <FaLandmark /> },
        { title: "Domestic Cleaning", location: "In Cleaning", name: <GiGloves /> },
        { title: "Carpet Cleaning", location: "In Cleaning", name: <GiVacuumCleaner /> },
        { title: "Mould Removal", location: "In Cleaning", name: <GiBottledBolt /> },
    ]



    const handleClick = () => setClick(!click)
    console.log(input)

    const displaytoggle = () => {
        if (click) {
            return (
                <div className="services_options">
                    <div className="services_main">
                        {services.map((service, index) => {
                            return (
                                <div key={index}
                                    className="service_one"
                                    onClick={() => setInput(service.title)}>
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

    // const hasNomatch = () => {

    // }
    // if (input.length > 0) {
    //     services = services.filter((i) => {
    //         return i.title.match(input)
    //     }
    //     )
    // }



    return (
        <div className="book">

            {loading ? <DropbackOverlay loading={loading}/>
                 :
                (<div className="book_contents">
                    <div className="book_title">Book a service for your <strong>home , office </strong>or<strong> property</strong></div>
                    <p>in less than 25 seconds</p>
                    <div onClick={handleClick} className="book_input">
                        <div className="logo_input"><FcSearch /></div>
                        <input
                            type="text"
                            placeholder={`${input === "" ? "What do you need help with?" : input}`}
                            onChange={handleChange}
                            value={input}>
                        </input>
                    </div>
                    {displaytoggle()}</div>)}

        </div>
    )
}

export default Book
