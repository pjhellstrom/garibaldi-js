import axios from "axios";

export default {
  getManager: function(teamId) {
    return axios.get("/api/shifts/" + teamId);
  }
};
