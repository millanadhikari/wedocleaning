import React from 'react'
import './Friendly.css'
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

function Friendly() {
    return (
        <div className="friendly">
            <p style={{fontSize: "19px", fontWeight:"bold", color: "black"}}>Providing friendly, reliable cleaning services since 2010.</p>
            <p style={{marginTop:"15px", marginBottom:"10px", fontSize:"16px"}}>Serving 1000+ properties every month</p>
            <div className="friendly__lists">
                <div className="friendly__list">
                    <ArrowRightIcon style={{color:'black'}}/>
                    <p>Same & next-day visits</p>
                </div>
                <div className="friendly__list">
                    <ArrowRightIcon style={{color:'black'}}/>
                    <p>Fixed price & instant no-obligation quotes</p>
                </div>
                <div className="friendly__list">
                    <ArrowRightIcon style={{color:'black'}}/>
                    <p>Dedicated & insured service specialists</p>
                </div>
                <div className="friendly__list">
                    <ArrowRightIcon style={{color:'black'}}/>
                    <p>Professional grade equipment</p>
                </div>
                <div className="friendly__list">
                    <ArrowRightIcon style={{color:'black'}}/>
                    <p>100%* Bond back guarantee</p>
                </div>
            </div>
            <button className="button">BOOK ONLINE</button>
            <p style={{fontSize:"13px", margin:'10px'}}>OR</p>
            <button className="button">Call Us</button>
            <p style={{fontSize: '11px', margin: '10px'}}>to get same day service*.</p>

        </div>
    )
}

export default Friendly
