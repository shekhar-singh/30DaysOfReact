import React, { Component} from 'react';
import Like from "./common/like";
import TableHeader from './common/TableHeader';

class MoviesTable extends Component {
  columns = [
    {path: 'title', label: "Title"},
    {path: 'genre.name', label: "Genre"},
    {path: 'numberInStock', label: "Stock"},
    {key:'rate',label:'Rate'},
    {key:'delete', label:'Action'}

  ]

  render() { 
    const {movies, onDelete, onLike, onSort, sortColumn } = this.props;
      return (
          <table className="table">
            <TableHeader 
            columns={this.columns}
            sortColumn={sortColumn}
            onSort={onSort}
            />

          <tbody>
            {
            movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>
                <Like
                  liked={movie.liked}
                  onClick={() => onLike(movie)}
                />
                </td>
                
                <td>
                  <button
                    onClick={() => onDelete(movie)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
  
  
      );
  }
}
 
export default MoviesTable;

