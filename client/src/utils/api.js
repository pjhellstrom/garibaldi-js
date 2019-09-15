import axios from "axios";

export default {
  getManager: function(teamId) {
    return axios.get("/api/shifts/" + teamId);
  },

  getEmployees: function(teamId) {
    return axios.get("/api/user/manager/all/" + teamId);
  },

  addEmployees: function(newEmp) {
    return axios.post("/api/auth/register", newEmp);
  },

  removeEmployees: function(employeeId) {
    return axios.delete("/api/user/manager/deleteuser/" + employeeId);
  },

  addShifts: function(newShift) {
    return axios.post("/api/shift/manager/addshift", newShift);
  },

  removeShifts: function(shiftId) {
    return axios.delete("/api/shifts/manager/deleteshift/" + shiftId);
  },

  updateShifts: function(shiftId) {
    return axios.put("/api/shifts/manager/shift/" + shiftId);
  }
};
