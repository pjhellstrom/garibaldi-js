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
    userId : "5d7be1c98db6226a56a5b67f",
    shifts: [],
  };

  componentDidMount() {
    this.fetchUserShifts();
  };

  // This needs a filter function to only set to state if claimed < capacity
  fetchUserShifts = () => {
    API.checkShift(this.state.userId)
      .then(res => {
        this.setState({ shifts: res.data.shifts});
        console.log(res.data.shifts.length);
        console.log(this.state.shifts);
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <EmpNav />
        <div>
          <h1>My shifts Page</h1>
          {this.state.shifts.map((shifts, i) => (
            <ShiftCard {...shifts} key={i} />
          ))}
        </div>
      </div>
    );
  }
}

export default EmpClaimShift;
