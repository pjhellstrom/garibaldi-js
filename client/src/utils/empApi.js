import axios from "axios";

export default {
  getAllShift: function(teamId) {
    return axios.get("/api/shifts/" + teamId);
  },
  addToPending : function(userId,pending) {
    return axios.put("/api/user/" + userId, pending);
  }
  // it should be in the manager Api
};
