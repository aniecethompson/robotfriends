import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from './CardList';
import SearchBar from './SearchBar';
import Scroll from './Scroll'
import { setSearchField, requestRobots } from './actions';

const mapStateToProps = (state) => {
    return{
        searchField: state.setSearchField.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error

    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => requestRobots(dispatch)
    }
}

class App extends Component{


    // onSearchChange =(e) =>{
    //     this.setState({searchField: e.target.value})
        
    // }

    componentDidMount(){
     this.props.onRequestRobots()
            
    }

    render(){
        const {onSearchChange, robots, isPending, searchField}= this.props
        const filteredRobots = robots.filter((robot) => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })
        return isPending?
        <h1>Loading ...</h1>:
        (
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <SearchBar onSearchChange={onSearchChange}/>
                <Scroll>
                    <CardList robots={filteredRobots}/>
                </Scroll>
            </div>
        )
    }
}

    


export default connect(mapStateToProps, mapDispatchToProps)(App);