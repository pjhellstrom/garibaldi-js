import React, { Component } from "react";
import MgrNav from "./MgrNav";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import API from "../../utils/api";
// import Moment from "react-moment";
// import Moment from 'react-moment';
// import DateCon from "./DateCon";
// import moment from "moment";

class MgrAddShift extends Component {
  // Setting the component's initial state
  state = {
    name: "",
    description: "",
    claimed: 0,
    capacity: "",
    location: "",
    date: "",
    start: "",
    end: "",
    teamId: "5d7a696573326e9c75438f01"
  };

  // **** NOTE: Should take team_id from user inputing data (manager team_id) ****

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log("Saving this shift", this.state);
    this.saveShift();
  };

  saveShift = () => {
    API.addShifts({
      name: this.state.name,
      description: this.state.description,
      claimed: this.state.claimed,
      capacity: this.state.capacity,
      location: this.state.location,
      date: this.state.date,
      start: this.state.start,
      end: this.state.end,
      teamId: this.state.teamId
    })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  handleSelect = event => {
    //Handles datepicker picking date
    // console.log(event);

    // moment(event).format("MM DD YYYY")

    // console.log(event);
    let day = event;
    // let day = moment(event).format("MM-DD-YYYY");
    // console.log(day);
    // console.log(typeof(day),day);

    this.setState({ date: day });
    // this.setState.date = day;
  };

  render() {
    return (
      <div>
        <MgrNav />

        <form className="form">
          <input
            value={this.state.name}
            name="name"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Shift Name"
          />
          <br />
          <DatePicker
            placeholderText="Click to select a date"
            selected={this.state.date}
            value={this.state.date}
            // selected={this.state.displaydate}
            // value={this.state.displaydate}
            onSelect={this.handleSelect} //when day is clicked
          />
          <br />
          Start Time
          <input
            value={this.state.start}
            name="start"
            onChange={this.handleInputChange}
            type="time"
            placeholder="Start Time"
          />
          <br />
          End Time
          <input
            value={this.state.end}
            name="end"
            onChange={this.handleInputChange}
            type="time"
            placeholder="End Time"
          />
          <br />
          <input
            value={this.state.location}
            name="location"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Location"
          />
          <br />
          <input
            value={this.state.description}
            name="description"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Job Description"
          />
          <br />
          <input
            value={this.state.capacity}
            name="capacity"
            onChange={this.handleInputChange}
            type="number"
            placeholder="Number of positions"
            min="1"
          />
          <br />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default MgrAddShift;
