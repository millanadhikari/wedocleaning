import React from 'react'
import './ModernCleaning.css'
import DevicesIcon from '@material-ui/icons/Devices';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import ContactsOutlinedIcon from '@material-ui/icons/ContactsOutlined';

function ModernCleaning() {
    return (
        <div className="moderncleaning">
            <div className="moderncleaning_title">
            <h2>Modern cleaning for modern lives</h2>
            <p>We have the technology to keep things efficient and the people to keep things personalized.</p>
            </div>
            <div className="moderncleaning_contents">
                <div className="moderncleaning_content">
                    <DevicesIcon className="icons"/>
                    <h3> Instant online booking</h3>
                    <p>Get a free estimate and book online in minutes, or give us a call to book yourselfcleaning over the
                        phone.
                    </p>
                </div>
                <div className="moderncleaning_content">
                    <EventAvailableIcon className="icons"/>
                    <h3>Adjustable Scheduling</h3>
                    <p>Next-day service, last-minute switches, thunderstorms in the forecast-sometimes what a situation needs most is flexibility. When your plans change, so can ours.
                    </p>
                </div>

                <div className="moderncleaning_content">
                    <ContactsOutlinedIcon className="icons"/>
                    <h3>Trusted Professionals</h3>
                    <p>Fully insured and carefully vetted cleaning technicians will make sure to complete the service as per your requirement.
                    </p>
                </div>
            </div>
            
            
        </div>
    )
}

export default ModernCleaning
