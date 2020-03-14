import React, { Component } from 'react';
import './Home.css';


class Home extends Component{
render(){
    return <div className="main-div">
        <h1>Hello {this.props.name}</h1>
        <p>Welcome to the world</p>
        <p>This is new line</p>
    </div>
}

}
export default Home;