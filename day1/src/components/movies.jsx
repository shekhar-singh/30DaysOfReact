import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import Counter from './counter';

class Movies extends Component {
    state = {  
        movies: getMovies()
    } ;
    
    handleDelete = (movie) => {
        // console.log(movies);
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({ movies });
    };
    render() { 
        const {length: count} = this.state.movies;
        // if (this.state.movies.length === 0){
        if (count === 0){
            return(
                <p>There are no movie in database.</p>
            )
        }
        return (
            <>
            <p>There are {count} movies in database</p>
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>  
                        <th>Genre</th>
                        <th>Stock</th>
                        <th>Rate</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {this.state.movies.map(movie=>(
                 <tr key={movie._id}>
                    <td>{movie.title}</td>
                    <td>{movie.genre.name}</td>
                    <td>{movie.numberInStock}</td>
                    <td><Counter/></td>
                    <td>
                        <button onClick={()=>this.handleDelete(movie)} className='btn btn-danger btn-sm' >Delete</button>
                    </td>
                 </tr>   
                ))}
                </tbody>
            </table>
            </>

        );
    }
}
 
export default Movies;