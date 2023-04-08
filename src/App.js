import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import MainNav from './MainNav';
import NavBar from './NavBar';
import Cricket from './Cricket';
import FootBall from './FootBall';
import BasketBall from './BasketBall';
import ThrowBall from './ThrowBall';
function App() {
  const [ game, setGame ] = useState('cricket')
  return (
    <div className="App">
     <MainNav></MainNav>
     <NavBar game={game} setGame={setGame}></NavBar>
     {
      game==='cricket' && <Cricket></Cricket>
     }
     {
      game==='football' && <FootBall></FootBall>
     }
     {
      game==='basketball' && <BasketBall></BasketBall>
     }
     {
      game==='throwball' && <ThrowBall></ThrowBall>
     }
     {/* <Home></Home> */}
    </div>
  );
}

export default App;
