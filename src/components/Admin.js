import AdminNavBar from "./AdminNavBar";
import { useState, useEffect } from "react";
import AdminCricket from "./AdminCricket";
import AdminFootBall from "./AdminFootBall";
import AdminBasketBall from "./AdminBasketBall";
import AdminThrowBall from "./AdminThrowBall";
import footballService from "../services/footballService"
import basketballService from "../services/basketballService"
import throwballService from "../services/throwballService"

import cricketService from "../services/cricketService";
function Admin() {
  const [game, setGame] = useState("cricket");
  const [games, setGames] = useState([]);
  const [teams, setTeams] = useState([]);
  const [footballgames, setfootballGames] = useState([]);
  const [footballteams, setfootballTeams] = useState([]);
  const [basketballgames, setbasketballGames] = useState([]);
  const [basketballteams, setbasketballTeams] = useState([]);
  const [throwballgames, setthrowballlGames] = useState([]);
  const [throwballteams, setthrowballTeams] = useState([]);

  useEffect(() => {
    async function fetchgames() {
      const games = await cricketService.getGames();
      setGames(games);
    }
    fetchgames();
  }, []);
  useEffect(() => {
    async function fetchteams() {
      const teamss = await cricketService.getTeamsAdmin();
      setTeams(teamss);
      console.log("sa")
    }
    fetchteams();
  }, []);
  useEffect(() => {
    async function fetchfootballgames() {
      const footballgames = await footballService.getGames();
      setfootballGames(footballgames);
    }
    fetchfootballgames();
  }, []);
  useEffect(() => {
    async function fetchfootballteams() {
      const footballteamss = await footballService.getTeamsAdmin();
      setfootballTeams(footballteamss);
      console.log("sa")
    }
    fetchfootballteams();
  }, []);
  useEffect(() => {
    async function fetchbasketballgames() {
      const basketballgames = await basketballService.getGames();
      setbasketballGames(basketballgames);
    }
    fetchbasketballgames();
  }, []);
  useEffect(() => {
    async function fetchbasketballteams() {
      const basketballteamss = await basketballService.getTeamsAdmin();
      setbasketballTeams(basketballteamss);
      console.log("sa")
    }
    fetchbasketballteams();
  }, []);
  useEffect(() => {
    async function fetchthrowballgames() {
      const throwballgames = await throwballService.getGames();
      setthrowballlGames(throwballgames);
    }
    fetchthrowballgames();
  }, []);
  useEffect(() => {
    async function fetchthrowballteams() {
      const throwballteamss = await throwballService.getTeamsAdmin();
      setthrowballTeams(throwballteamss);
      console.log("sa")
    }
    fetchthrowballteams();
  }, []);

  return (
    <>
      <AdminNavBar game={game} setGame={setGame}></AdminNavBar>
      {game === "cricket" && <AdminCricket games={games} teams={teams}></AdminCricket>}
      {game === "football" && <AdminFootBall games={footballgames} teams={footballteams}></AdminFootBall>}
      {game === "basketball" && <AdminBasketBall games={basketballgames} teams={basketballteams}></AdminBasketBall>}
      {game === "throwball" && <AdminThrowBall games={throwballgames} teams={throwballteams}></AdminThrowBall>}
    </>
  );
}

export default Admin;
