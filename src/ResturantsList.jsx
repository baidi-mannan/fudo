import React from 'react'
import './index.css'
import {useParams} from 'react-router-dom'
import Resturant from './components/Resturant'
import  DishesJson from './Dishes.json'


const ResturantsList = () => {
    
    const { id } = useParams();
    
    var result = DishesJson.find(t=>t.id == id).resturants;
    

    
    return (
 <> 
  <div className="box1">
      <div className="container">
          <div className="body">
    

            
     
            {result.map(dish =>(
       <Resturant
           id={dish.id}
           name={dish.name}
           img={dish.image}
           ratings={dish.ratings}
           isOpen={dish.open}
       />
            ))}
      

            
    
    
 
          </div>
 
      </div> 
  </div>
     
    
    


</>
)
}
export default ResturantsList