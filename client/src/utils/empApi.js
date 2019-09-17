import axios from "axios";

export default {
  getAllShift: function(teamId) {
    return axios.get("/api/shifts/" + teamId);
  },
  addToUserPending : function(userId,pending) {
    console.log(userId,pending);
    return axios.put("/api/user/employee/claimShift/" + userId, pending);
  },
  checkShift : function(userId) {
    console.log(userId);
    return axios.get("/api/user/employee/shifts/" + userId);
  },
  getShifts : function(shiftId) {
    console.log(shiftId);
    return axios.get("/api/shifts/findOneShift/" + shiftId);
  },
  addToMgrPending : function(shiftId,userId){
    console.log("shift and user",shiftId,userId);
    return axios.put("/api/shifts/manager/shift/" + shiftId,userId);
  }

};
