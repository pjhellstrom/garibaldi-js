import React, { Component } from "react";
import MgrNav from "./MgrNav";
import ShiftCard from "./MgrPendingShiftCard";
import API from "../../utils/api";

class MgrPendingApproval extends Component {
  state = {
    teamId: "5d7a696573326e9c75438f01",
    shifts: []
  };

  componentDidMount() {
    console.log("running the gwt manager");
    this.fetchShifts();
    
  }

  fetchShifts = () => {
    API.getManager(this.state.teamId)
      .then(res => {
        this.setState({ shifts: res.data });
        console.log("check ths shift",this.state.shifts);
    })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <MgrNav />
        <div>
          <h1>Manager Pending Approval Page</h1>

          {/* mapping through dummy data change to real data in production */}
          {this.state.shifts.map((shifts, i) => (
            <ShiftCard
              {...shifts} // Breaks out shift data for rendering each card
              key={i} // Gives each card a react key i
              deleShift={this.deleShift}
              updateShift={this.updateShift}
            />
          ))}
          {/* <ShiftCard/> */}
        </div>
      </div>
    );
  }
}

export default MgrPendingApproval;
