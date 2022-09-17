import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'

class Counter extends Component {
    state = {
        count: 0
    };
    handleLike = () => {
        console.log("clicked like");
        this.setState({ count: this.state.count + 1 })
    };
    render() {
        return (
                           
            <button className="btn btn-success btn-lg fa fa-heart fa-xl" onClick={this.handleLike}>{this.state.count}</button>      

        );
    }
}

export default Counter;