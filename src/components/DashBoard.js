import NavBar from "./NavBar";
import Login from "./Login";
import Cricket from "./Cricket"
import FootBall from "./FootBall"
import ThrowBall from "./ThrowBall"
import BasketBall from "./BasketBall"
import { useState, useEffect } from "react";
import cricketService from "../services/cricketService"
import footballService from "../services/footballService"
import basketballService from "../services/basketballService"
import throwballService from "../services/throwballService"
const DashBoard = () =>{
    const [game, setGame] = useState("cricket");
    const [games, setGames] = useState([]);
    const [footballgames, setfootballGames] = useState([]);
    const [basketballgames, setbasketballGames] = useState([]);
    const [throwballgames, setthrowballGames] = useState([]);
  
    const fetchData = async () => {
      const games = await cricketService.getGames();
      setGames(games);
      const footballgames = await footballService.getGames();
      setfootballGames(footballgames);
      const basketballgames = await basketballService.getGames();
      setbasketballGames(basketballgames);
      const throwballgames = await throwballService.getGames();
      setthrowballGames(throwballgames);
    }
  
    useEffect(() => {
      fetchData();
      const intervalId = setInterval(fetchData, 2000);
      return () => clearInterval(intervalId);
    }, []);
  return (
   <>
   {/* <NavBar user={user} game={game} setGame={setGame}></NavBar> */}
      {<NavBar game={game} setGame={setGame}></NavBar>}
      {/* {user===null && page === 2 && <Login startLogin={handleLogin} />} */}
      {game === "cricket" && <Cricket games={games}></Cricket>}
      {game === "football" && <FootBall games={footballgames}></FootBall>}
      {game === "basketball" && <BasketBall games={basketballgames}></BasketBall>}
      {game === "throwball" && <ThrowBall games={throwballgames}></ThrowBall>}
      {/* {user!=null  && page === 3 && <Admin></Admin>} */}
   </>
  );
}
export default DashBoard;