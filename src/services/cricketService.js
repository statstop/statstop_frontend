import axios from "axios";

const getGames = async () =>{
    const response = await axios.get(`http://${BE_IP}:8085/cricket/get-games`)
    return response.data
}
const getTeamsAdmin = async () =>{
    const response = await axios.get(`http://${BE_IP}:8085/cricket/get-teams`)
    return response.data
}
const addTeam = async (newTeam) =>{
    const response = await axios.post(`http://${BE_IP}:8085/cricket/add-team`,newTeam)
    return response.data
}
const addGame = async (newGame) =>{
    const response = await axios.post(`http://${BE_IP}:8085/cricket/add-game`,newGame)
    return response.data
}
const updateGame = async (updateGame) =>{
    const response = await axios.post(`http://${BE_IP}:8085/cricket/update`,updateGame)
    return response.data
}

const exportObject = {getGames,getTeamsAdmin,addTeam,addGame,updateGame}
export default exportObject;