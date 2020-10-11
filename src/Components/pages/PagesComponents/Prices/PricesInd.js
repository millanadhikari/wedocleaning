import React, {useState} from 'react'
import './PriceInd.css'



function PricesInd() {
    const [showPrices, setShowPrices] = useState('false');

   

    return (
        <div className="pricesind">
            <div className="prices">
                <div className="ourprices">Our prices</div>
                <div 
                    onClick = {() => setShowPrices(!showPrices)}
                    className="uparrow">~</div>
            </div>
            {showPrices ?  
            <div className="table">
                <table>
                    <tr>
                        <th>Property</th>
                        <th>Fantastic Club</th>
                        <th> Standard </th>
                    </tr>
                    <tr>
                        <td>Bedroom</td>
                        <td>$30</td>
                        <td>$45</td>
                        
                    </tr>
                    <tr>
                        <td>Living Room</td>
                        <td>$38</td>
                        <td>$48</td>
                        
                    </tr>
                    <tr>
                        <td>Hallway</td>
                        <td>$38</td>
                        <td>$48</td>
                        
                    </tr>
                    
                </table>
                <p>*The minimum for the service is $90</p>
            </div> : 
        </div>
    )
}

export default PricesInd
