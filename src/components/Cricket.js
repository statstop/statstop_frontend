import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Cricket() {
  return (
    <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col>
        <div href="#">
          <Card>
            {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
            <Card.Body >
              <Card.Title href="#">RCB VS MI</Card.Title>
              <Card.Text>
               Will start at 2nd April,7:00 pm IST
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