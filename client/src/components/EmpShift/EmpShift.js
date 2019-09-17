// import "./style.css";
import Day from "../Day/Day"
import React, { Component } from "react";
import EmpNav from "./EmpNav";
import ShiftCard from "./EmpShiftCard";
import API from "../../utils/empApi";



class EmpShift extends Component{
  state = {
    teamId: "5d7a696573326e9c75438f01",
    userId : "5d7be1c98db6226a56a5b67f",//TODO : need to get the employee id 
    shifts : [],
    approvedShifts : null,
    pendingShifts : [],
    avaliableShifts : []
  }
  componentDidMount(){
    this.employeeShifts();
    this.fetchUserShifts();
  }
  employeeShifts = () =>{
    API.getAllShift(this.state.teamId)
    .then(res=>{
      this.setState({shifts : res.data});
      console.log(res);
    })
    .catch(err => console.log(err));
  }
  addShift = shift =>{
    console.log(this.state.avaliableShifts[shift]._id);
    let pending = {"pendingShifts": this.state.avaliableShifts[shift]._id};

    API.addToPending(this.state.userId,pending)
    .then(res=>{
      console.log(res);
    })
    .catch(err => console.log(err));
  }
  
  // This needs a filter function to only set to state if claimed < capacity
  fetchUserShifts = () => {
    API.checkShift(this.state.userId)
      .then(res => {
        this.setState({ 
                        pendingShifts: res.data.pendingShifts});
        console.log(res.data.shifts._id);
        let approvedShifts=[]; 
        res.data.shifts.map(id=>{approvedShifts.push(id._id);});
        console.log(approvedShifts);
        this.setState({approvedShifts : approvedShifts});
        this.getAvaliableShifts();
      })
      .catch(err => console.log(err));
  };
  getAvaliableShifts = ()=>{
    let otherShifts = [];
    const pendingShifts = this.state.pendingShifts;
    const approvedShifts =this.state.approvedShifts;
    console.log(pendingShifts, approvedShifts,this.state.shifts)
    for(let i=0; i<this.state.shifts.length; i++){
      if(!pendingShifts.includes(this.state.shifts[i]._id) && !approvedShifts.includes(this.state.shifts[i]._id)){
          otherShifts.push(this.state.shifts[i]);
      }
    }
    console.log(otherShifts);
    this.setState({avaliableShifts : otherShifts});
  }

  displayCard =()=>{
    return this.state.avaliableShifts.map((shift,index) => (
    <ShiftCard {...shift} index = {index} value = {this.addShift}/>)
    )
  }
  render(){
    return(
      <div>
        <EmpNav/>
        <div>
          <h1>Employee Page</h1>
          {this.displayCard()}
        </div>
      </div>
      
    );
  }
}

export default EmpShift;
