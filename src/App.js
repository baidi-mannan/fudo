import React from 'react'
import DishesList from './DishesList'
import ResturantsList from './ResturantsList'
import {Route,Switch} from 'react-router-dom'

const App = () => {
    
    
    
    return (
 <> 
 <Switch>
    <Route exact path="/" component={DishesList}/>
    <Route  path="/api/categories/:id" component={ResturantsList}/>
 </Switch>
    
</>
)
}

export default App
