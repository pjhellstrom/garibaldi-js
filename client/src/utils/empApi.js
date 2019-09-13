import axios from "axios";

export default {
  getAllShift: function(teamId) {
    return axios.get("/api/shifts/" + teamId);
  }
  // addShifts : function(shift) {
  //   return axios.post("/api/user/")
  // }
  // it should be in the manager Api
};
