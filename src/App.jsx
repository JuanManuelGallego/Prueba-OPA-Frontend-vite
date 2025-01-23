import { useState, useEffect } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonAddModal from './components/button-add-modal';
import HistoryCard from './components/history-card';

function App() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetch('https://prueba-opa-backend-nodejs-production.up.railway.app/trips')
      .then((response) => response.json())
      .then((data) => {
        setHistory(data);
      })
      .catch((error) => {
        console.error('Error fetching history:', error);
      });
  }, []);

  const handleAddTrip = (newTrip) => {
    setHistory((prevHistory) => [...prevHistory, newTrip]);
  };

  return (
    <main className="app-container">
      <Container>
        <Row className="align-items-center mb-5">
          <Col xs={12} md={8}>
            <h1>Calculator History</h1>
          </Col>
          <Col xs={12} md={4} className="text-md-end text-center">
            <ButtonAddModal onSave={handleAddTrip} />
          </Col>
        </Row>
        <Row>
          <Col>
            {history.length > 0 ? history.map((el, index) => (
              <HistoryCard
                totalCalories={el.totalCalories}
                totalWeight={el.totalWeight}
                name={el.name}
                optimalItems={el.optimalItems}
                key={index}
              />
            )): <p>No trips calculated</p>}
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default App;
