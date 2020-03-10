import React, { Component } from 'react';


class Home extends Component{
render(){
    return <div>
        <h1>Hello {this.props.name}</h1>
        <p>Welcome to the world</p>
    </div>
}

}
export default Home;