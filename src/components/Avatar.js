import React, { useCallback, Component } from 'react';
import './Avatar.css';
import 'tachyons';
import AvatarList from './AvatarList';

const Avatar = (props) => {
// class Avatar extends Component{
//     render(){
        

//     }


// }

    const avatarlistarray = [
        {
            id:1,
            name:"Suren",
            work:"FrontEnd"
        },
        {
            id:2,
            name:"Jayant",
            work:"React"
        },
        {
            id:3,
            name:"Shrestha",
            work:"web developer"
        },
        {
            id:4,
            name:"SurenSoftware",
            work:"BackEnd"
        }
    ]
    // it is using for loop>>>>>> Map(callback(currentvalue,index,array)arg)
   const arrayvariable =  avatarlistarray.map( (AvatarListCard, i)=>{

        return(
            <AvatarList id={avatarlistarray[i].id} name={avatarlistarray[i].name} work={avatarlistarray[i].work} />
    )
    })


    return (
    <div className="mainpage">
    <div><h1>Welcome to Avatar World</h1>
    
    {arrayvariable}
    
    {/* <AvatarList id="1" name={avatarlistarray[0].name} work={avatarlistarray[0].work} />
    <AvatarList id="1" name={avatarlistarray[1].name} work={avatarlistarray[1].work} />
    <AvatarList id="1" name={avatarlistarray[2].name} work={avatarlistarray[2].work} />
    <AvatarList id="1" name={avatarlistarray[3].name} work={avatarlistarray[3].work} /> */}
   
    </div>
    <div><button>Subcribe</button></div>
    </div>
)


}
export default Avatar;