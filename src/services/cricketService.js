import axios from "axios";

const getGames = async () =>{
    const response = await axios.get(`http://localhost:8085/get-games`)
    return response.data
}

const exportObject = {getGames}
export default exportObject;