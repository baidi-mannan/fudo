import React from 'react'
import './index.css'
import {useParams} from 'react-router-dom'
import Resturant from './components/Resturant'
import  DishesJson from './Dishes.json'


const ResturantsList = () => {
    
    const { id } = useParams();
    
    var result = DishesJson.find(t=>t.id == id);
    console.log(id)
    console.log(result.resturants);

    
    return (
 <> 
     
    
    <h1 style={{color: "black"}}> HYYY ResturantsList</h1>


</>
)
}
export default ResturantsList