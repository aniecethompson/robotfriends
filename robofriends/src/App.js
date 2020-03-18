import React from 'react';
import CardList from './CardList';
import SearchBar from './SearchBar'

const App = () =>{
    
    return(
        <div className="tc">
            <h1>RoboFriends</h1>
            <SearchBar />
            <CardList />
        </div>
    ) 
}

export default App;