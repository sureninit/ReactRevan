import React from 'react';
import './Avatar.css';
 
const Avatar = () => {
    return <div className="avatarstyle">
        <h1>Avatar</h1>
        <img src="https://joeschmoe.io/api/v1/suren" alt="Avatar"></img>
        <h1 className="alert alert-primary">suren</h1>
        <p>Web Developer</p>
    </div>

}
export default Avatar;