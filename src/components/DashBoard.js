import NavBar from "./NavBar";
import Login from "./Login";
import Cricket from "./Cricket"
import FootBall from "./FootBall"
import ThrowBall from "./ThrowBall"
import BasketBall from "./BasketBall"
import { useState, useEffect } from "react";
import cricketService from "../services/cricketService"
const DashBoard = () =>{
    const [game, setGame] = useState("cricket");
    const [games, setGames] = useState([]);
    useEffect(() => {
        async function fetchgames() {
          const games = await cricketService.getGames();
          setGames(games);
        }
        fetchgames();
      }, []);
  return (
   <>
   {/* <NavBar user={user} game={game} setGame={setGame}></NavBar> */}
      {<NavBar game={game} setGame={setGame}></NavBar>}
      {/* {user===null && page === 2 && <Login startLogin={handleLogin} />} */}
      {game === "cricket" && <Cricket games={games}></Cricket>}
      {game === "football" && <FootBall></FootBall>}
      {game === "basketball" && <BasketBall></BasketBall>}
      {game === "throwball" && <ThrowBall></ThrowBall>}
      {/* {user!=null  && page === 3 && <Admin></Admin>} */}
   </>
  );
}
export default DashBoard;