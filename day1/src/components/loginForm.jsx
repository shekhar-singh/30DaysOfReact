import React, { Component } from "react";

class LoginForm extends Component {
  state = {
    account: { username: '', password: '' }
  };


  // componentDidMount(){
  //   this.username.current.focus();
  // };

  handleChange = ({currentTarget: input}) =>{
    const account = {...this.state.account};
    account[input.name] = input.value;
    this.setState({account});
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('cred: ');

  };
  
  render() {
    const {account} = this.state;
    return (
      <div>
        <h1>Login</h1>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input 
            onChange={this.handleChange}
            value={account.username}
            name='username'
            type="text" 
            id="username" 
            className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
            value={account.password}
            name='password'
            onChange={this.handleChange}
            type="password" 
            id="password" 
            className="form-control" />
          </div>

          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
