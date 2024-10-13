import { useState } from 'react';
import style from '../myStyle.module.css';

function Example({subject}){
    const  [exampleDemo,setexampleDemo]=useState("React Hook")
    const btnStyle={padding:'10px',border:'1px solid',borderRadius:'20px',backgroundColor:'yellow',width:'80px',color:'white'}
    const style={margin:'10px',padding:'10px',borderRadius:'5px',width:'400px'}
const [user,setUser]=useState("")
const handleSubmit = (e)=>{
  e.preventDefault()
  alert("username:",user)
}
  const add=(data)=>{
    setexampleDemo(data)
  }
    console.log();
    return(
        <>
        {subject==="react" &&
        <>
                <h4 className={style.heading}>inside Example component!!-data from parent :'{subject}' and state:{exampleDemo}</h4>
                <button onClick={()=>add("react concepts")} style={btnStyle}>add</button>
</>

        }
        <div className='{style.heading}'>
          <form>
            <label htmlFor='uname'>username:
             <input  style={{btnStyle}} type="text" id="uname" placeholder='username please' />
             value={user || ""} onChange={(e)=>setUser(e.target.value)}
            </label>
            <input type="submit" value="submit" />
          </form>
        </div>
        </>
    )
}
export default Example;