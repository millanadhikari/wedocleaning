import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import './FooterNew.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';


export default function FooterNew() {

  return (
    <div className='footernew'>
      <Accordion className="accordion">
        <AccordionSummary
          expandIcon={<AddIcon />}

          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className='footernew_heading'>Discover</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul className = "footer_cities">
              <li>Melbourne</li>
              <li>Sydney</li>
              <li>Adelaide</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  className="accordion">
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className='footernew_heading'>Company</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ul className = "footer_cities">
              <li>Home</li>
              <li>About us</li>
              <li>Contact us</li>
              <li>Blog</li>

            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion  className="accordion">
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className='footernew_heading'>Terms & Policies</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ul className = "footer_cities">
              <li>Cookies Policy</li>
              <li>Privacy Policy</li>
              <li>Terms and Conditions</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  className="accordion">
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className='footernew_heading'>Services</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ul className = "footer_cities">
              <li>End of Lease Clean </li>
              <li>Carpet Cleaning</li>
              <li>Window Cleaning</li>
              <li>Mould Cleaning</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <div className="footernew_socialmedia">
        <FacebookIcon fontSize="large"className = "socialmedia_icons"/>
        <YouTubeIcon fontSize="large" className = "socialmedia_icons"/>
        <InstagramIcon fontSize="large" className = "socialmedia_icons"/>
                
      </div>
      <p className="footer_text">WeServe Cleaning Services (c) 2021. All Rights Reserved</p>
    </div>

  );
}
