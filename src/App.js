
adavijit firebase auth
Latest commit fef5953 on Dec 14, 2019
 History
 1 contributor
Executable File  39 lines (37 sloc)  664 Bytes
   
import React, { Component } from 'react';
import './App.css';
import fire from './config/fire';
import Login from './Login'
import Home from './Home'
class App extends Component{
  constructor(props)
  {
    super(props);
    this.state={
      user : {}
    }
  }
  componentDidMount()
  {
    this.authListener();
  }
  authListener(){
    fire.auth().onAuthStateChanged((user)=>{
      if(user)
      {
        this.setState({user})
      }
      else{
        this.setState({user : null})
      }
    })
  }

  render(){
    return (
      <div className="App">
        {this.state.user ? (<Home/>) : (<Login/>)}
      </div>
    );
  }
}

export default App;
