/* eslint-disable react/prop-types */
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
//import HistoryCard from './history-card';
import FromModal from './form-modal';

function ButtonAddModal({ onSave }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSave = () => {
    const formData = {
        name: document.getElementById('exampleForm.ControlInput').value,
        minCalories: document.getElementById('exampleForm.ControlInput1').value,
        maxWeight: document.getElementById('exampleForm.ControlInput2').value,
        items: [
          {
            name: document.getElementById('exampleForm.ControlInput3').value,
            weight: document.getElementById('exampleForm.ControlInput4').value,
            calories: document.getElementById('exampleForm.ControlInput5').value,
          },
        ],
      };
    console.log('Form Data:', formData);
    fetch('http://localhost:3000/trips', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          minCalories: formData.minCalories,
          maxWeight: formData.maxWeight,
          name: formData.name,
          items: [
            {
              name: formData.name,
              weight: formData.weight,
              calories: formData.calories,
            },
          ],
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Success:', data);
          onSave(data);
          setShow(false);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add New Trip
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Trip</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <FromModal/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ButtonAddModal;