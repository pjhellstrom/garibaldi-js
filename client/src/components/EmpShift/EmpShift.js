// import "./style.css";
import Day from "../Day/Day";
import React, { Component } from "react";
import EmpNav from "./EmpNav";
import ShiftCard from "./EmpShiftCard";
import API from "../../utils/empApi";


class EmpShift extends Component{
  state = {
    teamId: "5d7a696573326e9c75438f01",
    shifts : []
  }
  componentDidMount(){
    this.employeeShifts();
  }
  employeeShifts = () =>{
    API.getAllShift(this.state.teamId)
    .then(res=>{
      this.setState({shifts : res.data});
      console.log(res.data);
    })
    .catch(err => console.log(err));
  }

  addShift = (shift) =>{
    API.addShifts(this.state.shifts[0][shift])
    .then(res=>{
      console.log(res);
    })
    .catch(err => console.log(err));
  }
  
  render(){
    return(

      <div>
        <EmpNav />
        <div>
          <h1>Employee Page</h1>
          {this.state.shifts.map((shifts,i) => (<ShiftCard {...shifts} key={i} addShift = {this.addShift}/>)
            )}

        </div>
      </div>
    );
  }
}

export default EmpShift;
