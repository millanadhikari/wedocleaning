import React, {useEffect} from 'react'
import { useForm, useStep} from "react-hooks-helper"
import Name from '../BookingMultiStep/Name'
import Address from '../BookingMultiStep/Address'
import Contact from '../BookingMultiStep/Contact'
import Review from '../BookingMultiStep/Review'
import Submit from '../BookingMultiStep/Submit'
import JobDescription from '../BookingMultiStep/JobDescription'
import QuoteCreater from '../BookingMultiStep/QuoteCreater'
import Book from './Book'
import useUnsavedChangesWarning from '../Materials/Accordion/useUnsavedChangesWarnings'



const defaultData = {
    firstName: "Milan",
    lastName: "dfdf",
    nickName: "dfdf",
    address: 'dfdf d d d ',
    city: 'dfdfd ',
    state: 'nsw',
    post_code: '2121',
    phone: '054545454',
    email: 'dfdfd@yahoo.com',
    serviceChoosed: "End of Lease Clean",
    propertyType: "Studio",
    bedrooms: 0,
    bathrooms: 1,
    totalPrice: 149
}

const steps = [
    { id: 'jobdescription' },
    { id: 'names' },
    { id: 'address' },
    { id: 'contact' },
    { id: 'review' },
    { id: 'submit' },

]
function MultistepForm() {

    const [formData, setForm] = useForm(defaultData);
    const [step, navigation] = useStep({
        steps,
        initialStep:0
    })  
    
    const [Prompt, setDirty, setPristine] = useUnsavedChangesWarning();
    useEffect(() => {
        console.log(step)

    }, [formData])
    const props = { formData, setForm, navigation, setDirty, setPristine, Prompt }
    switch (step.id) {
        // case "chooseservice":
        //     return <><Book {...props} /> <Book {...props} /></>;
        case "jobdescription":
            return <><JobDescription {...props} /> <QuoteCreater {...props} /></>;
        case "names":
            return (<> <Name {...props} /><QuoteCreater {...props} /></>);
        case "address":
            return <><Address {...props} /> <QuoteCreater {...props} /></>
        case "contact":
            return <><Contact {...props} /> <QuoteCreater {...props} /></>
        case "review":
            return <><Review {...props} /> <QuoteCreater {...props} /></>
        case "submit":
            return <><Submit {...props} /> <QuoteCreater {...props} /></>
    }

    return (
        <div className = "multistepform">
           <div></div>
        </div>
    )
}

export default MultistepForm
