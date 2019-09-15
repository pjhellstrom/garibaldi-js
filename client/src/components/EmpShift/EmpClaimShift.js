// import "./style.css";
import Day from "../Day/Day";
import React, { Component } from "react";
import EmpNav from "./EmpNav";
import ShiftCard from "./ShiftCard";
import API from "../../utils/empApi";
// import shifts from "../../fakedata/shift.json";

class EmpClaimShift extends Component {
  state = {
    teamId: "5d7a696573326e9c75438f01",
    userId : "5d7be3078a8735002a537e49",
    shiftId: [],
    shifts : []
  };

  componentDidMount() {
    this.fetchUser();
  }

  // This needs a filter function to only set to state if claimed < capacity
  fetchUser = () => {
    API.checkShift(this.state.userId)
      .then(res => {
        this.setState({ shiftId: res.data.shifts});
        console.log(res.data);
        console.log(this.state.shiftId);
      })
      .catch(err => console.log(err));
  };
  getShifts = (shiftId) =>{
    console.log("get into get shifts");
    API.getShifts(shiftId)
    .then(res=>{
      console.log(res.data);
      this.setState({shifts : this.state.shifts.push(res.data)});
      console.log(this.state.shifts);

    })
    .catch(err => console.log(err));
  }

  getShiftSum = () =>{
    this.state.shiftId.map(shift=> {this.getShifts(shift)});
    console.log("get into the shiftSum");
  }


  render() {
    return (
      <div>
        <EmpNav />
        <div>
          <h1>My shifts Page</h1>
          {/* {this.state.shifts.map((shifts, i) => (
            <ShiftCard {...shifts} key={i} />
          ))} */}
          {this.getShiftSum()}
        </div>
      </div>
    );
  }
}

export default EmpClaimShift;
