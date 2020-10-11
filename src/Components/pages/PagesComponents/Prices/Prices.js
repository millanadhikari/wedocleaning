import React from 'react'
import './Prices.css'

function Prices(props) {

    

    const givePrices = () => {


        if(props.services.selectedServices === "Carpet") {
            return(
                <div className="carpet_price">
                    <div class="eolprices">
                            <div class="eolp_title">
                <div><h2>How Much Carpet Cleaning Costs.?</h2> </div>
                <div class="line"></div> </div>
                <div class="pricetable">
                <div class="eolprice_table">
                <div class="table_tit">
                <div class="prop">Property Type</div>
                <div class="hellochahai">
                <div class="eolcln">Carpet Cleaning</div>
                <div class="eolcln">End of Lease Cleaning + 40% OFF Deep
                    carpet cleaning</div>
                </div>
                </div>
                <div class="table_tit_1">
                <div class="prop">Prices</div>
                <div class="hellochahai">
                <div class="eolcln1"><div class="orange">WeServe
                Member</div><div>Standard</div></div>
                <div class="eolcln1"><div class="orange">WeServe
                Member</div><div>Standard</div></div>
                </div>
                </div>
                <div class="table_tit_2">
                <div class="prop">Lounge / Dining room (12×12 feet)</div>
                <div class="hellochahai">
                <div class="eolcln1"><div
                class="orange">$45</div><div>$84</div></div>
                <div class="eolcln1"><div
                class="orange">$222</div><div>$200</div></div>
                </div>
                </div>
                <div class="table_tit_1">
                <div class="prop">Through lounge (28×12 feet)</div>
                <div class="hellochahai">
                <div class="eolcln1"><div
                class="orange">$54</div><div>$78</div></div>
                <div class="eolcln1"><div
                class="orange">$234</div><div>$74</div></div>
                </div>
                </div>
                <div class="table_tit_2">
                <div class="prop">Hallway (10x4 feet)</div>
                <div class="hellochahai">
                <div class="eolcln1"><div
                class="orange">$94</div><div>$99</div></div>
                <div class="eolcln1"><div
                class="orange">$111</div><div>$131</div></div>
                </div>
                </div>
                <div class="table_tit_1">
                <div class="prop">Large Rug (up to 15sq.m)</div>
                <div class="hellochahai">
                <div class="eolcln1"><div
                class="orange">$114</div><div>$148</div></div>
                <div class="eolcln1"><div
                class="orange">$134</div><div>$174</div></div>
                </div>
                </div>
                <div class="table_tit_0">
                <div class="prop">Combine And Save</div>
                <div class="hellochahai">
                <div class="eolcln1"><div>WeServe Member</div></div>
                <div class="eolcln1"><div>Standard</div></div>
                </div>
                </div>
                <div class="table_tit_1">
                <div class="prop">Combine End of Lease + Carpet Cleaning
                and get discount</div>
                <div class="hellochahai">
                <div class="eolcln1"><div class="orange">15% and Members
                Rate</div></div>
                <div class="eolcln1"><div>10% or Members Rate</div></div>
                </div>
                </div>
                <div class="table_tit_2">
                <div class="prop"> To Combine End of Lease with any other
                Cleaning and get discount you can <span class="phone">Call Us</span> any
                day between 9am and 5pm.</div>
                </div>
                </div>
                </div>
                </div>
                </div>
            )
        }
        else if (props.services.selectedServices === "Domestic") {
            return(
                <div className="domestic_price">
                             <div class="eolprices">
                            <div class="eolp_title">
                <div><h2>How Much Domestic Cleaning Costs.?</h2> </div>
                <div class="line"></div> </div>
                <div class="pricetable">
                <div class="eolprice_table">
                <div class="table_tit">
                <div class="prop">Property Type</div>
                <div class="hellochahai">
                <div class="eolcln">Domestic Cleaning</div>
                <div class="eolcln">End of Lease Cleaning + 40% OFF Deep
                    carpet cleaning</div>
                </div>
                </div>
                <div class="table_tit_1">
                <div class="prop">Prices</div>
                <div class="hellochahai">
                <div class="eolcln1"><div class="orange">WeServe
                Member</div><div>Standard</div></div>
                <div class="eolcln1"><div class="orange">WeServe
                Member</div><div>Standard</div></div>
                </div>
                </div>
                <div class="table_tit_2">
                <div class="prop">Studio Flat</div>
                <div class="hellochahai">
                <div class="eolcln1"><div
                class="orange">$94</div><div>$99</div></div>
                <div class="eolcln1"><div
                class="orange">$111</div><div>$131</div></div>
                </div>
                </div>
                <div class="table_tit_1">
                <div class="prop">1 Bed Room</div>
                <div class="hellochahai">
                <div class="eolcln1"><div
                class="orange">$114</div><div>$148</div></div>
                <div class="eolcln1"><div
                class="orange">$134</div><div>$174</div></div>
                </div>
                </div>
                <div class="table_tit_2">
                <div class="prop">2 Bed Rooms</div>
                <div class="hellochahai">
                <div class="eolcln1"><div
                class="orange">$94</div><div>$99</div></div>
                <div class="eolcln1"><div
                class="orange">$111</div><div>$131</div></div>
                </div>
                </div>
                <div class="table_tit_1">
                <div class="prop">3 Bed Room</div>
                <div class="hellochahai">
                <div class="eolcln1"><div
                class="orange">$114</div><div>$148</div></div>
                <div class="eolcln1"><div
                class="orange">$134</div><div>$174</div></div>
                </div>
                </div>
                <div class="table_tit_0">
                <div class="prop">Combine And Save</div>
                <div class="hellochahai">
                <div class="eolcln1"><div>WeServe Member</div></div>
                <div class="eolcln1"><div>Standard</div></div>
                </div>
                </div>
                <div class="table_tit_1">
                <div class="prop">Combine End of Lease +Tile and Grout
                cleaning and get discount</div>
                <div class="hellochahai">
                <div class="eolcln1"><div class="orange">15% and Members
                Rate</div></div>
                <div class="eolcln1"><div>10% or Members Rate</div></div>
                </div>
                </div>
                <div class="table_tit_2">
                <div class="prop"> To Combine End of Lease with any other
                CLeaning and get discount you can <span class="phone">Call Us</span> any
                day between 9am and 5pm.</div>
                </div>
                </div>
                </div>
                </div>
                </div>
            )
        } else if(props.services.selectedServices === "EndofLease") {
            return(
                <div className="endoflease_price">
               <div class="eolprices">
                            <div class="eolp_title">
                <div><h2>How Much End of Lease Cleaning Costs.?</h2> </div>
                <div class="line"></div> </div>
                <div class="pricetable">
                <div class="eolprice_table">
                <div class="table_tit">
                <div class="prop">Property Type</div>
                <div class="hellochahai">
                <div class="eolcln">End of Lease Cleaning</div>
                <div class="eolcln">End of Lease Cleaning + 40% OFF Deep
                    carpet cleaning</div>
                </div>
                </div>
                <div class="table_tit_1">
                <div class="prop">Prices</div>
                <div class="hellochahai">
                <div class="eolcln1"><div class="orange">WeServe
                Member</div><div>Standerd</div></div>
                <div class="eolcln1"><div class="orange">WeServe
                Member</div><div>Standerd</div></div>
                </div>
                </div>
                <div class="table_tit_2">
                <div class="prop">Studio Flat</div>
                <div class="hellochahai">
                <div class="eolcln1"><div
                class="orange">$94</div><div>$99</div></div>
                <div class="eolcln1"><div
                class="orange">$111</div><div>$131</div></div>
                </div>
                </div>
                <div class="table_tit_1">
                <div class="prop">1 Bed Room</div>
                <div class="hellochahai">
                <div class="eolcln1"><div
                class="orange">$114</div><div>$148</div></div>
                <div class="eolcln1"><div
                class="orange">$134</div><div>$174</div></div>
                </div>
                </div>
                <div class="table_tit_2">
                <div class="prop">2 Bed Rooms</div>
                <div class="hellochahai">
                <div class="eolcln1"><div
                class="orange">$94</div><div>$99</div></div>
                <div class="eolcln1"><div
                class="orange">$111</div><div>$131</div></div>
                </div>
                </div>
                <div class="table_tit_1">
                <div class="prop">3 Bed Room</div>
                <div class="hellochahai">
                <div class="eolcln1"><div
                class="orange">$114</div><div>$148</div></div>
                <div class="eolcln1"><div
                class="orange">$134</div><div>$174</div></div>
                </div>
                </div>
                <div class="table_tit_0">
                <div class="prop">Combine And Save</div>
                <div class="hellochahai">
                <div class="eolcln1"><div>WeServe Member</div></div>
                <div class="eolcln1"><div>Standard</div></div>
                </div>
                </div>
                <div class="table_tit_1">
                <div class="prop">Combine End of Lease +Tile and Grout
                cleaning and get discount</div>
                <div class="hellochahai">
                <div class="eolcln1"><div class="orange">15% and Members
                Rate</div></div>
                <div class="eolcln1"><div>10% or Members Rate</div></div>
                </div>
                </div>
                <div class="table_tit_2">
                <div class="prop"> To Combine End of Lease with anyother
                CLeaning and get discount you can <span class="phone">Call Us</span> any
                day between 9am and 5pm.</div>
                </div>
                </div>
                </div>
                </div>
                </div>
                               
            )
        }
        else if(props.services.selectedServices === "Mould-Removal") {
            return(
                <div className="endoflease_price">
                            End of Lease Cleaning : Rs 2000
                </div>
            )
        }
    }

    return (
        <div className="prices">
            {givePrices()}
      </div>
    
    )
}

export default Prices
