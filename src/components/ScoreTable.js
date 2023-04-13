import Table from "react-bootstrap/Table";

function ScoreTable() {
  return (
    <>
      <div className="abc">
        <Table>
          <thead>
            <th>Royal Challengers Bangalore Innings</th>
            <th>212-2 (20 Ov)</th>
          </thead>
        </Table>
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
              <td>Virat Kohli</td>
              <td>c stonis b Amit Mishra</td>
              <td>61</td>
              <td>44</td>
              <td>4</td>
              <td>4</td>
              <td>138.64</td>
            </tr>
            <tr>
              <td>du plessis(c)</td>
              <td>not out</td>
              <td>79</td>
              <td>46</td>
              <td>5</td>
              <td>5</td>
              <td>171.74</td>
            </tr>
            <tr>
              <td>Maxwell</td>
              <td>b Mark wood</td>
              <td>59</td>
              <td>29</td>
              <td>3</td>
              <td>6</td>
              <td>203.45</td>
            </tr>
            <tr>
              <td>Karthik(wk)</td>
              <td>not out</td>
              <td>1</td>
              <td>1</td>
              <td>0</td>
              <td>0</td>
              <td>100.00</td>
            </tr>
          </tbody>
        </Table>
        <Table>
          <thead>
            <th>Extras</th>
            <th>12 (b 0, lb 8, w 4, nb 0, p 0)</th>
          </thead>
        </Table>
        <Table>
          <thead>
            <th>Total</th>
            <th>212 (2 wkts, 20 Ov)</th>
          </thead>
        </Table>
        <Table>
          <thead>
            <th>Did Not Bat</th>
            <th>
              Lomror , Shahbaz Ahmed , Anuj Rawat , Willey , Parnell , Harshal
              Patel , Siraj , Karn Sharma
            </th>
          </thead>
        </Table>
        <br />
        <br />
        <Table striped bordered hover>
          <thead>
            <th>Bowler</th>
            <th>Over</th>
            <th>Maiden</th>
            <th>Run</th>
            <th>Wicket</th>
            <th>NoBall</th>
            <th>Wide</th>
            <th>Economy</th>
          </thead>
          <tbody>
            <tr>
              <td>Jaydev Unadkat</td>
              <td>2</td>
              <td>0</td>
              <td>27</td>
              <td>0</td>
              <td>0</td>
              <td>1</td>
              <td>13.5</td>
            </tr>
            <tr>
              <td>Avesh Khan</td>
              <td>4</td>
              <td>0</td>
              <td>53</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>13.20</td>
            </tr>
            <tr>
              <td>Krunal Pandya</td>
              <td>4</td>
              <td>0</td>
              <td>35</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>8.80</td>
            </tr>
            <tr>
              <td>Mark Wood</td>
              <td>4</td>
              <td>1</td>
              <td>32</td>
              <td>1</td>
              <td>0</td>
              <td>2</td>
              <td>8.00</td>
            </tr>
            <tr>
              <td>Ravi Bishnoi</td>
              <td>4</td>
              <td>0</td>
              <td>39</td>
              <td>0</td>
              <td>0</td>
              <td>1</td>
              <td>9.80</td>
            </tr>
            <tr>
              <td>Amit Mishra</td>
              <td>2</td>
              <td>0</td>
              <td>18</td>
              <td>1</td>
              <td>0</td>
              <td>0</td>
              <td>9.00</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default ScoreTable;
