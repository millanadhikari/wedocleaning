import React from 'react'
import './HomeFirst.css'
import PhoneIcon from '@material-ui/icons/Phone';

function HomeFirst() {
    return (

        <div className="homefirst_img">
            <div className="homefirst_imgfinal">
                <div className="img__opacity"></div>

            </div>
     

        <div className="homefirst">


            <h3>Cleaning services for all your needs</h3>
            <p>The no-stress way to book the cleaning service you need in
            minutes. Eliminates back and forth emails. Book straight into our team's schedule even on SUNDAY!
            </p>
            <button>Get an Instant quote</button>
            <button className="buttonTwo">
                <PhoneIcon fontSize="large" />
                <div className="contact">
                    <h3>Call us 02 8103 2006</h3>
                    <p>24 hours a day, 7 days a week</p>
                </div>
            </button>


        </div>
        </div>
    )
}

export default HomeFirst
