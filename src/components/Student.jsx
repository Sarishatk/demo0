import React from 'react'
import { useState } from 'react';

function Student() {
    const [studentDetails, setstudentDetails] = useState({
        uname: '',
        gender: '',
        course: ''
    })
    const getDetails = (e) => {
        console.log(e.target);
        const { name, value }=e.target
        setstudentDetails({...studentDetails,[name]:value})
        console.log(studentDetails);
        
    }
    return (
        <div>
            <h1>STUDENT REGISTRATION FORM</h1>

            <form style={{ border: '1px solid', padding: '10px', borderRadius: '10px', marginTop: '20px' }}>
                <div style={{ marginBottom: '10px' }} >
                    <label htmlFor='uname'>username:
                        <input style={{ margin: '10px', padding: '10px', borderRadius: '5px', width: '400px' }} type="text" id='uname' placeholder='username pls' name='uname' 
                            onChange={(e) => getDetails(e)} value={studentDetails.uname || ""} />

                    </label>
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label style={{ marginRight: '10px' }}>
                        Gender:
                        <label htmlFor='male'>
                            <input type='radio' name='gender' id='male'  value={"male"} onChange={(e)=>getDetails(e)} />male
                        </label>
                        <label style={{ marginRight: '10px' }} htmlFor='female'>
                            <input type='radio' name='gender' id='male' value={"female"} onChange={(e)=>getDetails(e)}/>female
                        </label>


                    </label>

                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor='course'>course:</label>
                    <select style={{ margin: '10px', padding: '10px', border: '1px solid', borderRadius: '10px' }} name='' id='course'>
                        <option disabled hidden selected>choose course</option>
                        <option value='biology'>biology</option>
                        <option value='biology'>commerce</option>
                        <option value='biology'>computerscience</option>

                    </select>
                    <br></br>
                    <input style={{ margin: '5px', padding: '5px', width: '100px', borderRadius: '5px', backgroundColor: "blue" }} type='submit' ></input>
                </div>
            </form>
        </div>



    )
}

export default Student