import React from 'react'
import './Dishes.css'



function Dishes(props){

    return (
<>  
<div className="box" compID = {props.id}>  
   
        <div className="card">

            <img src={props.img} alt="Couldn't find "/>
             <div className="info">
                <h1 className="head">{props.name}</h1>
                <div className="count">{props.count} counts <span className="arrow">&#9654;</span></div>
            
        </div>
            

        </div>
        </div>

     
  
    

</>
  );
    
}
export default Dishes;