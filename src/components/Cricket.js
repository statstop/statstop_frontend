import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import livescore from './live.json';
import Table from "react-bootstrap/Table";

function Cricket() {
  return (
    <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col>
        <div href="#">
          <Card>
            {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
            <Card.Body >
              <Card.Title href="#">{livescore.teamId.teamName} VS {livescore.teamId.teamName}</Card.Title>
              <Card.Text>
                 <Table striped bordered hover>
          <thead>
            <tr>
              <th>Batter</th>
              <th></th>
              <th>Run</th>
              <th>Ball</th>
              <th>4s</th>
              <th>6s</th>
              <th>SR</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{livescore.batter1.name}</td>
              <td>c stonis b Amit Mishra</td>
              <td>{livescore.batter1Run}</td>
              <td>44</td>
              <td>4</td>
              <td>4</td>
              <td>138.64</td>
            </tr>
            <tr>
              <td>{livescore.batter2.name}</td>
              <td>not out</td>
              <td>{livescore.batter2Run}</td>
              <td>46</td>
              <td>5</td>
              <td>5</td>
              <td>171.74</td>
            </tr>          
              </tbody>
              </Table>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        </Col>
      ))}
    </Row>
  );
}

export default Cricket;