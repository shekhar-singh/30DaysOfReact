import React, { Component } from "react";
import Input from "./common/input";

class LoginForm extends Component {
  state = {
    account: { username: '', password: '' },
    errors: {}
  };

  validate = () => {
    const errors = {};

    const { account } = this.state;
    if (account.username.trim() === '') 
      errors.username = 'Username is required.';
    if (account.password.trim() === '')
    errors.password = 'Password is required.';
    return Object.keys(errors).length === 0 ? null : errors;
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
    const errors = this.validate();
    console.log('errors',errors);
    this.setState({errors});
    if (errors) return;
    else
    console.log('submitted'); 

  };
  
  render() {
    const {account} = this.state;
    return (
      <div>
        <h1>Login</h1>

        <form onSubmit={this.handleSubmit}>
          <Input
          name="username"
          label='Username'
          value={account.username}
          onChange={this.handleChange}
          type="text"
          />
          <Input
          name="password"
          label='Password'
          value={account.password}
          onChange={this.handleChange}
          type="password"
          />

          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
