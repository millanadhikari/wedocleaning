import React from 'react'
import './Home.css'
import Cards from './PagesComponents/Cards'
import Footer from '../Footer/Footer'
import Readybook from '../Materials/Readybook/Readybook'
import FooterNew from './PagesComponents/FooterNew'
import Banner from '../pages/PagesComponents/Banner/Banner'
import Main from '../pages/PagesComponents/Main/Main'
import HomeFirst from '../Materials/HomeFirst/HomeFirst'
import Pride from '../Materials/Pride/Pride'
import ModernCleaning from '../Materials/ModernCleaning/ModernCleaning'
import Friendly from '../Materials/Friendly/Friendly'
import Carousel from '../Materials/Carousel/Carousel'


export default function Home() {


    return (
        <div className="home">
           {/* <Main/> */}
           <HomeFirst/>
            {/* <Banner/> */}
            <ModernCleaning/>
            <Pride/>
            <Friendly/>
            <Carousel/>
           
           <Readybook/>
           <FooterNew/>
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