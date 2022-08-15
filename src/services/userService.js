
import axios from "axios";

const API_URL = "http://localhost:5000/user/";


const getUser = (id) => {
    axios.get(API_URL+id)
    .then((response) => {
    localStorage.setItem("user", JSON.stringify(response.data));
    localStorage.setItem("date", "1 juillet");
  })
}
//   localStorage.setItem("id", JSON.stringify(response.data.id));
//   localStorage.setItem("token", JSON.stringify(response.data.accessToken));
//   localStorage.setItem("username", JSON.stringify(response.data.username));


const UserService = {
    getUser,
  };
export default UserService;