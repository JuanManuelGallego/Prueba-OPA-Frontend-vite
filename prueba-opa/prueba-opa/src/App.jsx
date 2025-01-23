// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState, useEffect } from 'react';
import './App.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ButtonAddModal from './components/button-add-modal';
import Col from 'react-bootstrap/Col';
import HistoryCard from './components/history-card';

function App() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/trips') 
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
    <main>
      <Container fluid>
        <Row>
          <Col xs={8} ><h1>Calculator history</h1></Col>
          <Col xs={4}> 
            <ButtonAddModal onSave={handleAddTrip}/>
          </Col>
        </Row>
        <Row>
          <Col>
            {history.map((el, index) => (
              <HistoryCard totalCalories={el.totalCalories} totalWeight={el.totalWeight} name={el.name} key={index}/>
            ))}
          </Col>
        </Row>
      </Container>
    </main>
  )
}

export default App
