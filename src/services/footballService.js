import axios from "axios";

const getGames = async () =>{
    const response = await axios.get(`http://localhost:8085/football/get-games`)
    return response.data
}
const getTeamsAdmin = async () =>{
    const response = await axios.get(`http://localhost:8085/football/get-teams`)
    return response.data
}
const addTeam = async (newTeam) =>{
    const response = await axios.post(`http://localhost:8085/football/add-team`,newTeam)
    return response.data
}
const addGame = async (newGame) =>{
    const response = await axios.post(`http://localhost:8085/football/add-game`,newGame)
    return response.data
}
const updateGame = async (gameId,teamId) =>{
    const response = await axios.post(`http://localhost:8085/football/update?gameId=${gameId}&teamId=${teamId}`,updateGame)
    return response.data
}

const exportObject = {getGames,getTeamsAdmin,addTeam,addGame,updateGame}
export default exportObject;