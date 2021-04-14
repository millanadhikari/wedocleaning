import React, { useState, useEffect } from "react";
import './Overview.css'

function Overview() {
    const [scroll, setScroll] = useState(false);
    function logit() {
        if(window.scrollY > 430) {
        setScroll(true)
        }else {
            setScroll(false)
        }
        console.log(scroll)
    }

    useEffect(() => {
       window.addEventListener("scroll", logit)
    return () => {
      window.removeEventListener("scroll", logit);
    };
    }, [])

    return (
        <div className={scroll ? 'overview active' : 'overview'}>
            <ul>
                <li>Overview</li>
                <li>Deals</li>
                <li>Prices</li>
                <li>Reviews</li>
                <li>FAQ</li>

            </ul>
            
        </div>
    )
}

export default Overview
