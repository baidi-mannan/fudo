import React from 'react'
import './Resturant.css'

const Resturant = (props) => {
    return (
        <>
        
        
        <div className={"boxr " + (props.isOpen ? 'open' : 'close')}>
           <div className="cardr">
             <div className="img">
    
                <img src={props.img} alt="Couldn't find"/>
             </div>
           </div>
           <div className="other">

                <div className="name">{props.name}</div>
                <div className="rating"><span className={"star " + ((props.ratings>=3.5) ? 'good' : 'bad')}> &#9734;</span> {props.ratings}</div>

            </div>     




           </div> 
        </>
    )
}

export default Resturant
