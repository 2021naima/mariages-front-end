
import axios from "axios";
const API_URL = "http://localhost:5000/prestataire/";


const getPrestataires = (idUser) => {
    axios.get(API_URL+idUser)
    .then((response) => {
    localStorage.setItem("userPrestataires", JSON.stringify(response.data));
    return response.data;
  })


}


const prestataireServices = {
    getPrestataires,
  };
export default prestataireServices;