import React from 'react'
import './Dishes.css'



function Dishes(props){

    return (
<>  
<div className="box">  
   
        <div className="card">

            <img src={props.img} alt="Couldn't find "/>
             <div className="info">
                <h1 className="head">{props.name}</h1>
              <a href={ '/api/categories/' + props.id }>  <div className="count">{props.count} counts <span className="arrow">&#9654;</span></div></a>
            
        </div>
            

        </div>
        </div>

     
  
    

</>
  );
    
}
export default Dishes;