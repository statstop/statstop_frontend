import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import livescore from './live2.json';
import Table from "react-bootstrap/Table";
import cricketService from '../services/cricketService'
import { useState } from 'react';

function Cricket({games}) {
  
  // {console.log(games[0].gameId);}
  return (
    <Row xs={1} md={2} className="g-4">
      {games.map((game, idx) => (
        <Col>
        <div href="#">
          <Card>
            {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
            <Card.Body >
              {/* <Card.Title href="#">{game.gameLevel}</Card.Title>
              <Card.Title href="#">{game.team1.teamName} {game.team1Score}/{game.team1Wickets} </Card.Title>
              <Card.Title href="#">{game.team2.teamName} {game.team2Score}/{game.team2Wickets}</Card.Title>
              <Card.Text></Card.Text> */}
              <Table>
                  <tr>
                    <td>{game.gameLevel}</td>
                  </tr>
                {/* <tbody> */}
                  <tr>
                    <td>{game.team1.teamName}</td>
                    <td>{game.team1Score}/{game.team1Wickets}</td>
                    <td>{game.team1overs>0?(game.team1overs-1):game.team1overs}.{game.team1ball}/{game.totalOvers}</td>
                  </tr>
                  <tr>
                    <td>{game.team2.teamName}</td>
                    <td>{game.team2Score}/{game.team2Wickets}</td>
                    <td>{game.team1overs>0?(game.team1overs-1):game.team1overs}.{game.team2ball}/{game.totalOvers}</td>
                  </tr>
                  <tr>
                    <td>{game.remarks}</td>
                  </tr>
                {/* </tbody> */}
              </Table>
            </Card.Body>
          </Card>
        </div>
        </Col>
      ))}
    </Row>
  );
}

export default Cricket;