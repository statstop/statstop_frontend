import { useState, useEffect } from "react";
import "./css/Admin.css";
import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import cricketService from "../services/cricketService";
import Notification from './Notification.js'

function AdminCricket({ games, teams }) {
  const [notification, setNotification] = useState(null);
  const [notificationType, setNotificationType] = useState(null);
  const [value, setValue] = useState(null);
  const [addteam1data, setAddteam1data] = useState(null);
  const [addteam2data, setAddteam2data] = useState(null);
  const [totalovers, setTotalOvers] = useState(null);
  const [gameLevel, setGameLevel] = useState(null);
  const [remarks, setRemarks] = useState(null);
  const [runScored, setRunScored] = useState(null);
  const [battingTeam, setBattingTeam] = useState(null);
  const [wicket, setWicket] = useState("0");
  const [addteamdata, setAddteamdata] = useState({
    teamName: "",
  });

  const handleGameChange = (event) => {
    const selectedIndex = event.target.selectedIndex;
    const selectedGame = games[selectedIndex - 1];
    console.log(value);
    setValue(selectedGame);
  };

  const handleTeam1Change = (event) => {
    const selectedIndex = event.target.selectedIndex;
    const selectedTeam = teams[selectedIndex - 1];
    setAddteam1data(selectedTeam);
  };
  const handleTeam2Change = (event) => {
    const selectedIndex = event.target.selectedIndex;
    const selectedTeam = teams[selectedIndex - 1];
    setAddteam2data(selectedTeam);
  };
  const handleTeamChange = (event) => {
    const fiendvalue = event.target.value;
    console.log("a " + fiendvalue);
    const team = {
      teamName: fiendvalue,
    };
    console.log("b " + team.teamName);
    setAddteamdata(team);
    console.log(addteamdata);
  };
  const handleTotalOverChange = (event) => {
    const fiendvalue = event.target.value;
    setTotalOvers(fiendvalue);
  };
  const handleRunScoredChange = (event) => {
    const fiendvalue = event.target.value;
    setRunScored(fiendvalue);
  };
  const handleGameLevelChange = (event) => {
    const fiendvalue = event.target.value;
    setGameLevel(fiendvalue);
  };
  const handleRemarksChange = (event) => {
    const fiendvalue = event.target.value;
    setRemarks(fiendvalue);
  };
  const handleAddteam = (event) => {
    event.preventDefault();
    console.log(addteamdata);
    cricketService.addTeam(addteamdata);
  };
  const handleAddGame = (event) => {
    event.preventDefault();
    const newGame = {
      team1Id: addteam1data.teamId,
      team2Id: addteam2data.teamId,
      totalOvers: totalovers,
      gameLevel: gameLevel,
      remarks: remarks,
    };
    console.log(newGame);
    cricketService.addGame(newGame);
  };
  const handleUpdateGame = (event) => {
    event.preventDefault();
    const updateGame = {
      gameId: value.gameId,
      runScored: parseInt(runScored),
      wicket: parseInt(wicket),
      team: parseInt(battingTeam)
    };
    console.log(updateGame);
    notificationHandler(`success`,`error`)
    cricketService.updateGame(updateGame);
  };
  const handleUpdateTeamChange = (event) => {
    setBattingTeam((event.target.value));
  };
  const handleWicket = (event) => {
    setWicket((event.target.value));
  };
  const notificationHandler = (message, type) => {
    setNotification(message)
    setNotificationType(type)

    setTimeout(() => {
      setNotificationType(null)
      setNotification(null)
    }, 3000)
  }
  return (
    <>
      <form class="last" onSubmit={handleUpdateGame}>
      <div class="headgame">
        <h3>Select Cricket Game</h3>
        </div>
        <select
          class="select1"
          value={value}
          id="gameSelect"
          onChange={handleGameChange}
        >
          <option>select</option>
          {games.map((game, idx) => (
            <option key={game.id} value={game.id}>
              {game.team1.teamName} Vs {game.team2.teamName}
            </option>
          ))}
        </select>
        <RadioGroup
          row
          aria-labelledby="demo-radio-buttons-group-label"
          // defaultValue="nowicket"
          name="radio-buttons-group"
          onChange={handleUpdateTeamChange}
        >
          <FormControlLabel
            value="1"
            control={<Radio />}
            label={value == null ? "" : value.team1.teamName}
          />
          <FormControlLabel
            value="2"
            control={<Radio />}
            label={value == null ? "" : value.team2.teamName}
          />
        </RadioGroup>
        <div class="txt_field">
          <input type="text" name="runScored" required="required" onChange={handleRunScoredChange}></input>
          <span></span>
          <label>Enter Run Scored</label>
        </div>
        <RadioGroup
          row
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="0"
          name="radio-buttons-group"
          onChange={handleWicket}
        >
          <FormControlLabel value="1" control={<Radio />} label="Wicket" />
          <FormControlLabel
            value="0"
            control={<Radio />}
            label="NotWicket"
          />
        </RadioGroup>
        <div class="updateGame">
          <input type="submit" value="Update"></input>
        </div>
      </form>
      <Notification notification={notification} type={notificationType} />
      <form class="addTeam" onSubmit={handleAddteam}>
        <div class="txt_field">
          <input
            type="text"
            name="name"
            required="required"
            onChange={handleTeamChange}
          ></input>
          <span></span>
          <label>Enter TeamName</label>
        </div>
        <div class="add">
          <input type="submit" value="Add Team"></input>
        </div>
      </form>
      <form class="addTeam" onSubmit={handleAddGame}>
        <select
          class="select"
          value={value}
          id="team1Select"
          onChange={handleTeam1Change}
        >
          <option>select</option>
          {teams.map((team, idx) => (
            <option key={team.id} value={team.id}>
              {team.teamName}
            </option>
          ))}
        </select>
        <select
          class="select"
          value={value}
          id="team2Select"
          onChange={handleTeam2Change}
        >
          <option>select</option>
          {teams.map((team, idx) => (
            <option key={team.id} value={team.id}>
              {team.teamName}
            </option>
          ))}
        </select>
        <div class="txt_field">
          <input
            type="text"
            name="totalovers"
            required="required"
            onChange={handleTotalOverChange}
          ></input>
          <span></span>
          <label>Enter Total Overs</label>
        </div>
        <div class="txt_field">
          <input
            type="text"
            name="gamelevel"
            required="required"
            onChange={handleGameLevelChange}
          ></input>
          <span></span>
          <label>Enter Game Lavel</label>
        </div>
        <div class="txt_field">
          <input
            type="text"
            name="remarks"
            required="required"
            onChange={handleRemarksChange}
          ></input>
          <span></span>
          <label>Enter Remarks</label>
        </div>
        <div class="add">
          <input type="submit" value="Add Game"></input>
        </div>
      </form>
    </>
  );
}

export default AdminCricket;
