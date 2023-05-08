import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function FootBall({games}) {
  return (
    <div class="cards">

    <Row xs={1} md={4} className="g-4">
      {games.map((game, idx) => (
        <Col>
          <Card>
            {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
            <Card.Body>
              <Card.Text>
               {game.gameLevel}
              </Card.Text>
              <Card.Title>{game.team1.teamName} {game.team1Goals} - {game.team2Goals} {game.team2.teamName}</Card.Title>
             
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </div>
  );
}

export default FootBall;