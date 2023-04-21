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
              <Card.Title href="#">{game.team1.teamName} VS {game.team2.teamName}</Card.Title>
              <Card.Text>{game.team1Score}/{game.team1Wickets}</Card.Text>
            </Card.Body>
          </Card>
        </div>
        </Col>
      ))}
    </Row>
  );
}

export default Cricket;