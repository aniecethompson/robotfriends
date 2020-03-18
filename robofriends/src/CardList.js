import React from 'react';
import Card from './Card';
import { robots } from './robots';

const CardList = () => {
    
    let getAllRobots = () =>{
        return robots.map((robot) => {
           return <Card key={robot.id} id={robot.id} name={robot.name} email={robot.email}/>
        })
    }

    return (
        <div>
           {getAllRobots()}
       </div>
   )
}

export default CardList;