import React from 'react'
import './index.css'
import Dishes from './components/Dishes'
import  DishesList from './Dishes.json'

const App = () => {
    
    
    
    return (
        
<div className="box1">
 <div className="container">
    <div className="body">
    

            
     
      {DishesList.map(dish =>(
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
)
}

export default App
