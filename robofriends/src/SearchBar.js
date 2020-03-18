import React from 'react';

const SearchBar = (props) =>{
    return(
        <div className="pa2">
            <input 
            className="pa3 ba b--green bg-lightest-blue"
            onChange={props.onSearchChange}
            type="search" 
            placeholder="search robots"
            />
        </div>
    )
}

export default SearchBar;