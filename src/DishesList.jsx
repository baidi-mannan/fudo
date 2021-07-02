import React from 'react'
import './index.css'
import Dishes from './components/Dishes'
import  DishesJson from './Dishes.json'

const DishesList = () => {
    
    
    
    return (
 <> 
     
    <div className="box1">
      <div className="container">
          <div className="body">
    

            
     
            {DishesJson.map(dish =>(
       <Dishes
           id={dish.id}
           name={dish.name}
           img={dish.image}
           count={dish.resturants.length}
           resturants={dish.resturants}
       />
            ))}
      

            
    
    
 
          </div>
 
      </div> 
  </div>
</>
)
}

export default DishesList
