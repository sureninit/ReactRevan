import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/hello'
// import Hip from './components/hi'

class App extends React.Component {
  state = {
    fname: "Jayant",
    lname: "rai"
  }
  render() {
    return (
      <div className="App">
     
    <h1>{this.state.fname}</h1>
    <h1>{this.state.lname}</h1>
    
      </div>
    );


  }
  
}

export default App;
