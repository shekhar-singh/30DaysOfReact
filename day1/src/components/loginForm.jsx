import React, { Component } from "react";
import Input from "./common/input";

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
