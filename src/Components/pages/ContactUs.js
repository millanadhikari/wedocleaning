import React, {useState, useEffect} from 'react'
import './ContactUs.css'
import {
        TextField,
        FormLabel,
        RadioGroup,
        FormControl,
        FormControlLabel,
    Radio,
Checkbox,
} from '@material-ui/core'

import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';    
import BackupIcon from '@material-ui/icons/Backup';
import CircularProgress from '@material-ui/core/CircularProgress';
import Footer from '../Footer/Footer'
import {Link} from 'react-router-dom'

function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 2000));
  }
  

 const ContactUs = () => {
    const [isLoading, setLoading] = useState(false);
    const [formData, updateFormData] = useState([''
       ])
    
        const handleChange = (e) => {
            updateFormData({
              ...formData,
        
              // Trimming any whitespace
              [e.target.name]: e.target.value.trim()
            });
          };
        
          const handleSubmit = (e) => {
            e.preventDefault()
            console.log(formData);
            // ... submit to API or something
          };
    const loadPage = () => {
        return(
            <Link to='/thankyou' className='submit_button'onClick={handleSubmit}>
                </Link>
        )
    }

    useEffect(() => {
        if (isLoading) {
          simulateNetworkRequest().then(() => {
              
            setLoading(false);
          })
        }
      }, [isLoading]);

      const handleClick = () => {

        return(
          setLoading(true))}
    
    
    
      
    return (
        <div className="contact_us">
            <div className="title">CONTACT US</div>
            <div className="description">Request a quote for any of our services, send questions about your current bookings, get information about our franchise opportunities, offer us a business partnership or give feedback by filling in the form below. Depending on your request it takes less than a few minutes to complete.</div>
            <div className="form">
            <form >
                <div className="text_fields">
                    <div className="text_field"><TextField  onChange = {handleChange} name = "first_name" label="First Name" color="primary" variant="filled" required="true" /></div>
                    <div className="text_field"><TextField  onChange = {handleChange} name = "last_name" label="Last Name" color="primary" variant="filled" required="true" /></div>
                    <div className="text_field"><TextField  onChange = {handleChange} name = "phone_number"label="Phone Number" color="primary" variant="filled" required="true" /></div>
                </div>
                <div className="radio_buttons">
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Reason for contact:</FormLabel>
                    <RadioGroup color="secondary"aria-label="gender" name="gender1" >
                        <FormControlLabel onChange = {handleChange} name = "Request a service" value="requestservice" control={<Radio />} label="Request a service" />
                        <FormControlLabel onChange = {handleChange} name = "Discuss an exsiting booking" value="discuss" control={<Radio />} label="Discuss an exsiting booking" />
                        <FormControlLabel onChange = {handleChange} name = "Business partnership" value="partnership" control={<Radio />} label="Business partnership" />
                        <FormControlLabel onChange = {handleChange} name = "Join the company" value="join" control={<Radio />} label="Want to join the team" />
                        <FormControlLabel onChange = {handleChange} name ="Give Feedback" value="feedback" control={<Radio />} label="Leave feedback" />
                    </RadioGroup>
                    </FormControl>
                </div>
                <div className="comments">
                    <p>Please, describe your request or add any comments below:</p>
                <TextField
                    name="comments"
                    onChange = {handleChange}
                    shrink="true"
                    label="Comments"
                     fullWidth="true"
                     cols="4"
                     id="standard-full-width"
                    variant="outlined"
                    multiline="true"
                    rows="10"
                     
                />
                </div>
                <div className="file_upload">
                    <div className="upload_title">
                        <p>You can upload images and <strong>files up to 10MB</strong> each and 1 video up to 10 seconds.</p>
                        <p>0/10 uploaded</p>
                    </div>
                    <div className="upload">
                        <div className="upload_icon"><BackupIcon color = 'primary' fontSize='large'/></div>
                        <div className="upload_helper">
                            <p>DRAG FILES TO UPLOAD OR</p>
                            <div className="choose_files">
                                CHOOSE FILES
                            </div>
                        </div>

                    </div>
                </div>
                <div className="tick_boxes">
                <FormControlLabel
                name = "iagree"
                onChange={handleChange}
                value="end"
                control={<Checkbox color="primary" />}
                label="I have read and agree with Fantastic Cleaners Privacy Policy and Terms and Conditions."
                labelPlacement="I have read and agree with Fantastic Cleaners Privacy Policy and Terms and Conditions."
                />
                  <FormControlLabel
                name = "subscribe"
                 onChange={handleChange}
                value="end"
                control={<Checkbox color="primary" />}
                label="Subscribe to receive offers and news via email"
                labelPlacement="Subscribe to receive offers and news via email"
                />
                  <FormControlLabel
                name = "sms"
                onChange={handleChange}
                value="end"
                control={<Checkbox color="primary" />}
                label="Subscribe to receive offers and news via SMS"
                labelPlacement="Subscribe to receive offers and news via SMS"
                />
                </div>                             
                
                <Button 
                    // onClick={fetchData()}
                    color="info"
                    disabled={isLoading}
                    onClick={!isLoading ? handleClick : null}
                    >
                    {isLoading ? 'Please Wait...' : 'Submit' }
                     {/* <div className="loader">
                    <CircularProgress /> Please Wait...
                    </div> */}
                    </Button>

</form>
           
            </div>
            <Footer/>
        </div>
    )
}


export default ContactUs;