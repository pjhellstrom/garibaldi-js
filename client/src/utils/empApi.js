import axios from "axios";

export default {
  getAllShift: function(teamId) {
    return axios.get("/api/shifts/" + teamId);
  },
  addToPending : function(userId,pending) {
    console.log(userId,pending);
    return axios.put("/api/user/employee/claimShift/" + userId, pending);
  },
  checkShift : function(userId) {
    console.log(userId);
    return axios.get("/api/user/employee/shifts/" + userId);
  }
  // it should be in the manager Api
};
