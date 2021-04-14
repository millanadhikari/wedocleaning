import React, {useEffect, useState} from 'react'
import './Pride.css'
import { useCountUp } from 'react-countup';



function Pride() {
    
        
        const SimpleHook = ({start, end}) => {
            const { countUp } = useCountUp({ start:start, end: end });
            return(
                countUp
            )
          };
     
         
       
 
    return (
        <div className="pride">
            <div className="pride_contents">
                <h3>{SimpleHook({start:100, end:500})}
                        </h3>
                <p>services provided every month</p>
            </div>
            <div className="pride_contents">
                <h3>{SimpleHook({start:20, end:100})} + </h3>
                <p>professionals at your service</p>
            </div>
            <div className="pride_contents">
                <h3>{SimpleHook({start:0, end:7})} days</h3>
                <p>available all week long</p>
            </div>
        </div>
    )
}

export default Pride

