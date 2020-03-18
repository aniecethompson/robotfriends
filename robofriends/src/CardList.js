import React from 'react';
import Card from './Card';
import { robots } from './robots';

const CardList = () => {
    
    let getAllRobots = () =>{
        return robots.map((robot, i) => {
           return (
           <Card 
           key={i} 
           id={robot.id} 
           name={robot.name} 
           email={robot.email}
           />
           )
        })
    }

    return (
        <div>
           {getAllRobots()}
       </div>
   )
}

export default CardList;