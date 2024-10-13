import React, { Component } from 'react'

export default class Status extends Component {
  constructor(props){
    super(props)
    this.state={course:"mearn" }
  }
  componentDidMount(){
    setTimeout(()=>{
      this.state={course:"mearn" }

    },1000)
  }
  courseChane =()=>{
    this.setState({course:"mean"})
  }
  render() {
    return (
      <div>
     <h4>inside Sample component :random component state is :{this.state.course}</h4>
     <button onClick={this.courseChane} style={{padding:'10px',border:'1px solid',borderRadius:'20px',backgroundColor:'red',width:'80px',color:'black'}}>chane</button>

      </div>
    )
  }
}
