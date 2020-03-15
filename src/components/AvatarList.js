import React from 'react';
import './Avatar.css';
function AvatarList(props){
    return(
        <div className="avatarstyle bg-light-purple dib grow shadow-4 ">
            {/* pa4 ma4 */}
        <h1>Avatar</h1>
        <img src={`https://joeschmoe.io/api/v1/${props.name}`}  alt="Avatar"></img>
       
        <h1 className="">{props.name}</h1>
        <p>{props.work}</p>
    </div>

    )
}
export default AvatarList;