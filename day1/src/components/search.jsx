import React, { Component } from 'react';

class Search extends Component {
    state = {  };
    // handleSearch = (e) => {
    //     console.log(e.target.value);
    // }; 
    render() { 
        return (
            <nav className="navbar bg-light">
            <div className="container-fluid">
            <a className="navbar-brand">Movies</a>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>console.log(e.target.value)}/>
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </nav>
        );
    }
}
 
export default Search;