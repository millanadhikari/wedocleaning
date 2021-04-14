import React from 'react'
import './DropbackOverlay.css'
import BounceLoader from "react-spinners/BounceLoader";
import { css } from "@emotion/core";



const override = css`
  display: block;
  margin:20px;
  margin-left:70px;
  border-color: Yellow;
  text-align:center;
`;





function DropbackOverlay({loading}) {
    return (
        <div className="dropbackoverlay">
            <div className="loading_overlay">
                    <div className="loading_component">
                    </div>

                    <div className="loading_componentContents">
                        <h3>Please wait...</h3>
                        <BounceLoader
                            css={override}
                            size={50}
                            color={'#123abc'}
                            loading={loading} />
                        <p>We are preparing your booking.</p>
                    </div>


                </div>
        </div>
    )
}

export default DropbackOverlay
