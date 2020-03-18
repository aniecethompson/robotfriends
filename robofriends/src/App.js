import React, { Component } from 'react';
import CardList from './CardList';
import SearchBar from './SearchBar';
import Scroll from './Scroll'
// import { robots } from './robots';

class App extends Component{
    state = {
        robots: [],
        searchField: ''
    }

    onSearchChange =(e) =>{
        this.setState({searchField: e.target.value})
        
    }

    componentDidMount(){
        fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(resp => resp.json())
        .then(users => {
           this.setState({robots: users})
            })
            
    }

    render(){
        const filteredRobots = this.state.robots.filter((robot) => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        })
        return(
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <SearchBar onSearchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList robots={filteredRobots}/>
                </Scroll>
            </div>
        ) 
    }
}

    


export default App;