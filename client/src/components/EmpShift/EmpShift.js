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
  //get all shfts and check user's shifts before the component loaded
  componentDidMount(){
    this.employeeShifts();
    this.fetchUserShifts();
  }

  //get all shifts and store in state.shifts
  employeeShifts = () =>{
    API.getAllShift(this.state.teamId)
    .then(res=>{
      this.setState({shifts : res.data});
      console.log(res);
    })
    .catch(err => console.log(err));
  }
  //add to user pendingShifts field 
  addShift = shift =>{
    console.log(this.state.avaliableShifts[shift]._id);
    const pending = {"pendingShifts": this.state.avaliableShifts[shift]._id};

    API.addToUserPending(this.state.userId,pending)
    .then(res=>{
      console.log(res);
      this.addToMgrPendingShifts(this.state.avaliableShifts[shift]._id);
      })
    .catch(err => console.log(err));
  }
  
  //add to shift pendingShifts

    addToMgrPendingShifts = shiftId => {
      console.log("Starting add to shifts collection  ...");
      const userId = {"pendingUserId" : this.state.userId }
      API.addToMgrPending(shiftId,userId)
      .then(res=>{
        console.log(res);
      })
      .catch(err => console.log(err));
    }


  // TODO:This needs a filter function to only set to state if claimed < capacity
  //get user's information
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

  //get all shifts which didn't claimed or already proved by manager
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
// display the shifts
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
