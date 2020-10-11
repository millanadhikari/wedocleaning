import React from 'react'
import './Home.css'
import Cards from './PagesComponents/Cards'
import Footer from '../Footer/Footer'
import Readybook from '../Materials/Readybook/Readybook'
import Faq from '../pages/PagesComponents/Faq'
import Banner from '../pages/PagesComponents/Banner/Banner'
import Main from '../pages/PagesComponents/Main/Main'

export default function Home() {
    return (
        <div className="home">
           <Main/>
            <Banner/>
           <Faq/>
           <Readybook/>
           <Footer/>
        </div>
    )
}


// <div className="homepage_main">
// We serve cleaning
// </div>
// <div className="homepage_values">
// <div className="value">
//     <div className="value_logo">
//     </div>
//     <div className="value_title">
//         Five Star Quality
//     </div>
//     <div className="value_description">
//         Every time you book a service with us, we’ll send you qualified and experienced cleaning professionals. With high-tech cleaning equipment, we’re a cut above the best.
//     </div>
// </div>
// <div className="value">
// <div className="value_logo">
//     </div>
//     <div className="value_title">
//         Reasonable Pricing
//     </div>
//     <div className="value_description">
//     We offer excellent packages and affordable rates that meet our customers’ needs. We don’t believe in hidden charges!
//     </div>
// </div>
// <div className="value">
// <div className="value_logo">
//     </div>
//     <div className="value_title">
//         Real-time Customer Support
//     </div>
//     <div className="value_description">
//     Got a question? Don't keep it to yourself. Start a chat or call us to get a quick and simple answer.
//     </div>
// </div>
// {/* <div className="value">
// <div className="value_logo">
//     </div>
//     <div className="value_title">
//         Fantastic Guarantee
//     </div>
//     <div className="value_description">
//     We guarantee your satisfaction. If we get something wrong, we’ll come back and re-do it for free. We’re called Fantastic for a reason!
//     </div>
// </div> */}
// </div>