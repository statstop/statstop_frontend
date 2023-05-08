import AdminNavBar from "./AdminNavBar";
import { useState, useEffect } from "react";
import AdminCricket from "./AdminCricket"
import AdminFootBall from "./AdminFootBall"
import AdminBasketBall from "./AdminBasketBall"
import AdminThrowBall from "./AdminThrowBall"
function Admin() {
  const [game, setGame] = useState("cricket");
  return (
    <>
      <AdminNavBar game={game} setGame={setGame}></AdminNavBar>
      {game === "cricket" && <AdminCricket></AdminCricket>}
      {game === "football" && <AdminFootBall></AdminFootBall>}
      {game === "basketball" && <AdminBasketBall></AdminBasketBall>}
      {game === "throwball" && <AdminThrowBall></AdminThrowBall>}
    </>
  );
}

export default Admin;
