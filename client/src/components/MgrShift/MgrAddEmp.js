import React, { Component } from "react";
import MgrNav from "./MgrNav";
import API from "../../utils/api";

class MgrAddEmp extends Component {
  // Setting the component's initial state
  state = {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    location: "",
    isManager: false,
    team_id: "5d7a696573326e9c75438f01"
  };

  // **** NOTE: Should take team_id from user inputing data (manager team_id) ****

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value,
      [password]: password,
      [firstName]: value,
      [lastName]: value,
      [phoneNumber]: value,
      [location]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    this.saveEmployee();
  };

  saveEmployee = () => {
    API.addEmployees(this.state)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  handleSelect = event => {
    //Handles datepicker picking date
    // console.log(event);
    // moment(event).format("MM DD YYYY")
    // console.log(event);
    // let day = event;
    // this.setState({ date: day });
    // this.setState.date = day;
  };

  render() {
    return (
      <div>
        <MgrNav />

        <form className="form">
          <input
            value={this.state.username}
            name="username"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Employee Email"
          />
          <br />
          Password
          <input
            value={this.state.password}
            name="password"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Temporary Password"
          />
          <br />
          First Name
          <input
            value={this.state.firstName}
            name="firstname"
            onChange={this.handleInputChange}
            type="time"
            placeholder="First Name"
          />
          <br />
          Last Name
          <input
            value={this.state.lastName}
            name="lastname"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Last Name"
          />
          <br />
          Phone Number
          <input
            value={this.state.phoneNumber}
            name="phonenumber"
            onChange={this.handleInputChange}
            type="tel"
            placeholder="Employee Phone Number"
          />
          <br />
          Location
          <input
            value={this.state.location}
            name="location"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Location"
            min="1"
          />
          <br />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default MgrAddEmp;
