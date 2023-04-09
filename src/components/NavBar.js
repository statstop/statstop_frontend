import Nav from 'react-bootstrap/Nav';

const NavBar = ({ game, setGame }) =>{
  return (
    <Nav fill variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link onClick={() => { setGame('cricket')}}>Cricket</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={() => { setGame('football')}}>Football</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={() => { setGame('basketball')}}>BasketBall</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={() => { setGame('throwball')}}>ThrowBall</Nav.Link>
      </Nav.Item>
      {/* <Nav.Item>
        <Nav.Link eventKey="link-3">ThrowBall</Nav.Link>
      </Nav.Item> */}
    </Nav>
  );
}
export default NavBar;