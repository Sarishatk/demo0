import React, { useState } from 'react'
import './User.css';

function User(props) {
  const [colors,setColors] = useState({
    first:"red",
    second:"blue",
    third:"green"
  })

    console.log(props);
    const divStyle={
      backgroundColor :'yellow',
      display:'flex',
      alignItems:'center',
      justifyContent:'center'
    }
    const userArray=[
      {Usernamee:"maxwell",age:"23"},
      {Usernamee:"max",age:"21"},
      {Usernamee:"maxw",age:"29"},
      {Usernamee:"maxi",age:"20"},
      {Usernamee:"may",age:"74"}

    ]
  return (
   
  <>
      <div style={{backgroundColor:'yellow',margin:'20px',padding:'10px'}}> inside User component :data from parent is - '<span className='userStyle'>{props.Username}</span>'age:{props.age} </div>
    <div style={{backgroundColor:'yellow',margin:'20px',padding:'10px'}}>
     <h1>all users list</h1>
     <table>
      <thead>
        <tr>
          <th> #</th>
          <th> username</th>
          <th> age</th>
        </tr>
      </thead>
      <tbody>
        {
       userArray.map((item,index)=>(
        <tr>
          <td>{index+1}</td>
          <td>{item.Usernamee}</td>
          <td>{item.age}</td>

        </tr>
       ))
      }
      </tbody>
     </table>
     </div>
     </>
    )

}

export default User