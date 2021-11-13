import React from 'react'
import loader from './ajax-loader.gif'

const Loader=()=> {
        return (
            <div style={{margin:"auto",width:"30px"}}>
                <img src={loader} alt="loading..." />
            </div>
        )
    
}

export default Loader