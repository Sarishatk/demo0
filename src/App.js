import { useState } from 'react';

import './App.css';
import Example from './components/Example';
import Status from './components/Status';
import User from './components/User';
import Student from './components/Student';

function App() {
  const [exampleDemo,setexampleDemo]=useState("React Hook")
  const subject ="REACT"
  const Username="max willer"
  const btnStyle={padding:'10px',border:'1px solid',borderRadius:'20px',backgroundColor:'yellow',width:'80px',color:'white',}
  const style={margin:'10px',padding:'10px',borderRadius:'5px',width:'400px'}
  const display = ()=>{
    alert("button clicked!!!")
  }
  const add =()=>{
    alert(`${User} added`)
  }
  const getName = (e)=>{
console.log(e.target.value);
  }
  return (
    <>
    <div style={{textAlign:'center',color:'red',margin:'20px'}}>
      <Student/>
    </div>
<h1 style={{textAlign:'center',color:'red'}}>hellow world</h1>
<h2>state:<span style={{color:"red"}}>{exampleDemo}</span></h2>
<p>course : {subject}</p>
<button onClick={display} style={btnStyle}>click</button>
<button onClick={ ()=>add("react concepts")} style={btnStyle}>add</button>
<div >
  <input  onChange={(e)=>getName(e)} style={style} type='text' placeholder='enter user name' />
</div>
<h3>child components</h3>
<h3> functional component:<Example  subject={subject}/></h3>
<h3> class component:<Status /><User Username ={Username} age="27"/></h3>


    </>
  );
}

export default App;
