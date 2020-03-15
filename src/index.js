import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//import Home from './components/Home';
import Avatar from './components/Avatar';

//ReactDOM.render(<Home name="jayanta rai" />, document.getElementById('root'));
ReactDOM.render(<Avatar />
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
