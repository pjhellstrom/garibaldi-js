import React, { Component } from "react";
import MgrNav from "./MgrNav";
import MgrEmpCard from "./MgrEmpCard";
import API from "../../utils/api";
import MgrAddEmp from "./MgrAddEmp";

class MgrTeam extends Component {
  state = {
    teamId: "5d7a696573326e9c75438f01",
    employees: []
  };

  componentDidMount() {
    this.fetchEmployees();
  }

  deleEmp = userId => {
    API.removeEmployees(userId)
      .then(this.fetchEmployees)
      .catch(err => console.log(err));
  };

  fetchEmployees = () => {
    API.getEmployees(this.state.teamId)
      .then(res => this.setState({ employees: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <MgrNav />
        <div>
          <h1>Manage Team</h1>

          {/* mapping through dummy data change to real data in production */}
          {this.state.employees.map((users, i) => (
            <MgrEmpCard
              {...users} // Breaks out shifts data for rendering each card
              key={i} // Gives each card a react key i
              deleEmp={this.deleEmp}
            />
          ))}
        </div>
        <MgrAddEmp />
        <i className="fas fa-user-plus"></i> Add New Team Member (non-func)
      </div>
    );
  }
}

export default MgrTeam;

// Add user FA icon <i class="fas fa-user-plus"></i>
