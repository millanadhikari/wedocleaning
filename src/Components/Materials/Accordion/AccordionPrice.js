import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './AccordionPrice.css'



export default function AccordionPrice() {

  return (
    <div className='accordion'>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          
          
        >
          <Typography className="accordion_heading">End of lease cleaning Prices</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p style={{fontSize:'16px' }}>Please, have in mind that all prices are starting from:</p>
            <div className="price_box">
                <div className="property">
                    <h3>Property</h3>
                    <p>Studio flat</p>
                    <p>1 Bedroom</p>
                    <p style={{border:'none'}}>2 Bedrooms </p>
                    </div>
                    <div className="property">
                    <h3>Standard price</h3>
                    <p>$215</p>
                    <p>$245</p>
                    <p style={{color:"#48a2e0"}} >Check Prices and availability</p>
                    </div>
            </div>
            <span style={{fontFamily:'Raleway', fontSize:"14px"}}>NOTE: Keep in mind that wall spot cleaning, outside window cleaning and blinds wiping are not included in the end of lease cleaning and can be done at extra charge upon request.</span>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className="accordion_heading">End of lease + Carpet cleaning Prices</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <p style={{fontSize:'16px' }}>Please, have in mind that all prices are starting from:</p>
            <div className="price_box">
                <div className="property">
                    <h3>Property</h3>
                    <p>Studio flat</p>
                    <p>1 Bedroom</p>
                    <p style={{border:'none'}}>2 Bedrooms </p>
                    </div>
                    <div className="property">
                    <h3>Standard price</h3>
                    <p>$260</p>
                    <p>$330</p>
                    <p style={{color:"#48a2e0"}} >Check Prices and availability</p>
                    </div>
            </div>
            <span style={{fontFamily:'Raleway', fontSize:"14px"}}>NOTE: Keep in mind that wall spot cleaning, outside window cleaning and blinds wiping are not included in the end of lease cleaning and can be done at extra charge upon request.</span>
          
          </Typography>
        </AccordionDetails>
      </Accordion>
     
    </div>
  );
}
