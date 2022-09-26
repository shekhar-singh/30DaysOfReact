import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
// import Counter from './counter';

import Search from "./search";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "../utils/listGroup";
import MoviesTable from "./moviesTable";
import _ from 'lodash';

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 3,
    currentPage: 1,
    sortColumn: { path:'title', order:'asc' }
  };

  constructor() {
    super();
    console.log("App - Constructor", this);
    // this.state = this.props.something;
  }
  componentDidMount() {
    console.log("App - Mount");
    const generes = [{ _id:"", name: "All Generes" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres: generes });
  }

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  handleSort = (path) =>
  {
    const sortColumn = { ...this.state.sortColumn };
    if (sortColumn.path === path)
      sortColumn.order = sortColumn.order === 'asc' ? 'desc' : 'asc';
    else {
      sortColumn.path = path;
      sortColumn.order = 'asc';
    }
    this.setState({sortColumn});

  };

  render() {
    const { length: count } = this.state.movies;
    const { pageSize, currentPage, selectedGenre, movies, sortColumn } = this.state;
    // if (this.state.movies.length === 0){
    if (count === 0) {
      return <p>There are no movie in database.</p>;
    }
    const filtered =
      selectedGenre && selectedGenre._id
        ? movies.filter((m) => m.genre._id === selectedGenre._id)
        : movies;

    const sorted = _.orderBy(filtered, [sortColumn.path],[sortColumn.order])
    const moviesArr = paginate(sorted, currentPage, pageSize);

    return (
      <>
        <Search />
        <div className="row">
          <div className="col-2">
            <h1>Genre</h1>
            <ListGroup
              items={this.state.genres}
              selectedItem={selectedGenre}
              onItemSelect={this.handleGenreSelect}
            />
          </div>

          <div className="col">
            <p>There are {filtered.length} movies in database</p>

            <MoviesTable 
            movies={moviesArr} 
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
            />

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
