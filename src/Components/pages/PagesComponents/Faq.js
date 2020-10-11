import React, {useState} from 'react'

import './Faq.css'
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';

function Faq() {
    const [click, setClick] = useState(false);

   


   const handleClick = () => {
        setClick(!click)
        
    }

    return (
        <div className="faq">
            <p>FREQUENTY ASKED QUESTIONS</p>
            <div className="faqs">
                        <div className="faq_one">
                <div className="faq_question">Q: Are there any deposits?</div>
                <div className="faq_answer">A: Usually no, only for the big jobs with amounts larger than $400.</div>
            </div>
            <div className="faq_one">
                <div className="faq_question">Q: What equipment do you use?</div>
                <div className="faq_answer">A: Our team members are trained to use industry grade carpet and upholestery, specialist dip tank method for ovens, high reach water-fed pole with purified water for window cleaning, powerful gutter vaccum clearance system with a camera and more.</div>
            </div>
            </div>
            <div className="downarrow_icon" onClick={handleClick}>
                <p>View all FAQs </p><ArrowDropDownCircleIcon fontSize='large'/>
            </div>
            
            <div className="mobile_faqs" >
            <div className="faqs">
            <div className="faq_one">
                <div className="faq_question">Q: Do you provide the cleaning equipment and detergents?</div>
                <div className="faq_answer">Only for certain services. For example, End of Tenancy, Carpet and Upholstery cleaning. However, services such as One-offf Deep Cleaning do not include any quipment and detergents in the price. We can provide them for an additional fee of $20.</div>
            </div>
            <div className="faq_one">
                <div className="faq_question">Q: Is there a quality guarantee</div>
                <div className="faq_answer">Our End of Tenancy and Deep Cleaning services have a quality guarantee of 72 hours. In other words, in cae you are unhappy with the jov done, you can request re-clean within three days.</div>
            </div>
            </div>
            </div>
            </div>
    )
}

export default Faq
