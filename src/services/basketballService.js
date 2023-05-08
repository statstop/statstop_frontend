import axios from "axios";

const getGames = async () =>{
    const response = await axios.get(`http://localhost:8085/basketball/get-games`)
    return response.data
}
const getTeamsAdmin = async () =>{
    const response = await axios.get(`http://localhost:8085/basketball/get-teams`)
    return response.data
}
const addTeam = async (newTeam) =>{
    const response = await axios.post(`http://localhost:8085/basketball/add-team`,newTeam)
    return response.data
}
const addGame = async (newGame) =>{
    const response = await axios.post(`http://localhost:8085/basketball/add-game`,newGame)
    return response.data
}
const updateGame = async (gameId,teamId,points) =>{
    const response = await axios.post(`http://localhost:8085/basketball/update?gameId=${gameId}&teamId=${teamId}&points=${points}`,updateGame)
    return response.data
}

const exportObject = {getGames,getTeamsAdmin,addTeam,addGame,updateGame}
export default exportObject;