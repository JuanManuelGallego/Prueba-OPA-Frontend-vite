/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

function FromModal({ formData, setFormData }) {
  const [items, setItems] = useState([
    { name: '', weight: '', calories: '' },
  ]);

  const handleAddItem = () => {
    setItems([...items, { name: '', weight: '', calories: '' }]);
  };

  const handleItemChange = (index, field, value) => {
    const updatedItems = items.map((item, i) =>
      i === index ? { ...item, [field]: value } : item
    );
    setItems(updatedItems);
    setFormData((prev) => ({ ...prev, items: updatedItems }));
  };

  const handleFieldChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Form>
      <h4>Trip Parameters</h4>
      <Row>
        <Col xs={4}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Trip name"
              value={formData.name || ''}
              onChange={(e) => handleFieldChange('name', e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col xs={4}>
          <Form.Group className="mb-3">
            <Form.Label>Min Calories</Form.Label>
            <Form.Control
              type="text"
              placeholder="5"
              value={formData.minCalories || ''}
              onChange={(e) => handleFieldChange('minCalories', e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col xs={4}>
          <Form.Group className="mb-3">
            <Form.Label>Max Weight</Form.Label>
            <Form.Control
              type="text"
              placeholder="10"
              value={formData.maxWeight || ''}
              onChange={(e) => handleFieldChange('maxWeight', e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
      <hr />
      <h4>Elements</h4>
      {items.map((item, index) => (
        <Row key={index}>
          <Col xs={4}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Item name"
                value={item.name}
                onChange={(e) =>
                  handleItemChange(index, 'name', e.target.value)
                }
              />
            </Form.Group>
          </Col>
          <Col xs={3}>
            <Form.Group className="mb-3">
              <Form.Label>Weight</Form.Label>
              <Form.Control
                type="text"
                placeholder="5"
                value={item.weight}
                onChange={(e) =>
                  handleItemChange(index, 'weight', e.target.value)
                }
              />
            </Form.Group>
          </Col>
          <Col xs={3}>
            <Form.Group className="mb-3">
              <Form.Label>Calories</Form.Label>
              <Form.Control
                type="text"
                placeholder="5"
                value={item.calories}
                onChange={(e) =>
                  handleItemChange(index, 'calories', e.target.value)
                }
              />
            </Form.Group>
          </Col>
        </Row>
      ))}
      <Button onClick={handleAddItem}>+</Button>
    </Form>
  );
}

export default FromModal;
