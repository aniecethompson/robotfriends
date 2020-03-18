import React from 'react';
import Card from './Card';

const CardList = (props) => {

    let getAllRobots = () =>{
        return props.robots.map((robot, i) => {
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