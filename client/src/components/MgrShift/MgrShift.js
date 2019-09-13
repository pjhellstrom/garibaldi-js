import React, { Component } from "react";
import MgrNav from "./MgrNav";
import ShiftCard from "./ShiftCard";
// import shifts from "../../fakedata/shift.json";
import API from "../../utils/api";

class MgrShift extends Component {
  state = {
    teamId: "5d7a696573326e9c75438f01",
    shifts: []
  };

  componentDidMount() {
    this.fetchShifts();
  }

  deleShift = shiftId => {
    API.removeShifts(shiftId)
      .then(this.fetchShifts)
      .catch(err => console.log(err));
  };

  updateShift = shiftId => {
    API.updateShifts(shiftId)
      .then(this.fetchShifts)
      .catch(err => console.log(err));
  };

  fetchShifts = () => {
    API.getManager(this.state.teamId)
      .then(res => this.setState({ shifts: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <MgrNav />
        <div>
          <h1>Manager Page</h1>

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

export default MgrShift;

// {cards.map(
// 	(cards, i) => (<MemCard
// 		{...mem[cards]} // Breaks out mem data for rendering each card
// 		key={i} // Gives each card a react key i
// 		cardClick={this.cardClick} // This is where the click function gets passed in
// 		/>)
// )}
