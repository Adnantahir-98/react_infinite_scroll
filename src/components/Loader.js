import React, { useState } from 'react'
import SyncLoader from "react-spinners/SyncLoader";


const Loader = () => {
    
    let [color, setColor] = useState("#000000");

  return (
    <>
        <center>
            <SyncLoader
                color={color}
                // loading={loading}
                cssOverride={override}
                size={12}
                aria-label="Loading Spinner"
                data-testid="loader"
            /> 
            Loading...
      </center>
    </>
  )
}

export default Loader


const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};
