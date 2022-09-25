import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';
import Counter from './counter';
import Search from './search';
import Pagination from './common/pagination';
import { paginate } from '../utils/paginate';
import ListGroup from '../utils/listGroup';

class Movies extends Component {
    state = {
        movies: [],
        genres:[],
        pageSize: 3,
        currentPage: 1,
    };

    constructor() {
        super();
        console.log('App - Constructor', this);
        // this.state = this.props.something;

    }
    componentDidMount() {
        console.log("App - Mount");
        const generes = [{name: 'All Generes'}, ...getGenres()]
        this.setState({movies: getMovies(), genres: generes});
        
    }

    handleDelete = (movie) => {
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({ movies });
    };
    handlePageChange = (page) =>{
        // console.log(page);
        this.setState({currentPage: page})
    };

    handleGenreSelect = (genre) =>
    {
        console.log('genre', genre);
        this.setState({ selectedGenre:genre, currentPage: 1 });
    };
    
    render() {
        const { length: count } = this.state.movies;
        const { pageSize, currentPage, selectedGenre, movies } = this.state
        // if (this.state.movies.length === 0){
        if (count === 0) {
            return (
                <p>There are no movie in database.</p>
            )
        }
        const filtered = selectedGenre && selectedGenre._id ? movies.filter(m => m.genre._id === selectedGenre._id) : movies;
        const moviesArr = paginate(filtered, currentPage, pageSize);

        return (
            <>
                <Search />
                <div className='row'>
                    <div className='col-2'>
                        <h1>Genre</h1>
                        <ListGroup 
                        items={this.state.genres} 
                        selectedItem={selectedGenre}
                        onItemSelect={this.handleGenreSelect}
                        />
                    </div>
                
                <div className='col'>
                <p>There are {filtered.length} movies in database</p>
            
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
                        {moviesArr.map(movie => (
                            <tr key={movie._id}>
                                <td>{movie.title}</td>
                                <td>{movie.genre.name}</td>
                                <td>{movie.numberInStock}</td>
                                <td><Counter /></td>
                                <td>
                                    <button onClick={() => this.handleDelete(movie)} className='btn btn-danger btn-sm' >Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Pagination 
                itemsCount={filtered.length}
                pageSize={pageSize}
                onPageChange={this.handlePageChange}
                currentPage={currentPage} 
                />
                </div>
            </div>
            </>

        );
    }
}

export default Movies;