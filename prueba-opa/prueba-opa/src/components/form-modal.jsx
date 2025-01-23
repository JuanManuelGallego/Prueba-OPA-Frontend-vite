/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

function FromModal({ formData, setFormData }) {
       const handleAddItem = () => {
        setFormData((prev) => ({
            ...prev, items: [...formData.items, {name: '', calories: '', weight: ''}]
        }))
    };

    const handleItemChange = (index, field, event, isNumber = false) => {
        const value = event.target.value;
        if (isNumber) {
            const regexp = /^\d+$/
            if (isNumber && value.length > 0 && regexp && !regexp.test(value)) {
                event.preventDefault();
                return
            }
        }
        const items = [...formData.items];
        items[index][field] = event.target.value;
        setFormData((prev) => ({
            ...prev, items: [...items]
        }))
    };

    const handleFieldChange = (field, event, isNumber = false) => {
        const value = event.target.value;
        if (isNumber) {
            const regexp = /^\d+$/
            if (isNumber && value.length > 0 && regexp && !regexp.test(value)) {
                event.preventDefault();
                return
            }
        }
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    console.log(formData);
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
                            onChange={(e) => handleFieldChange('name', e)}
                        />
                    </Form.Group>
                </Col>
                <Col xs={4}>
                    <Form.Group className="mb-3">
                        <Form.Label>Min Calories</Form.Label>
                        <Form.Control
                            type="text"
                            inputMode='numeric'
                            placeholder="5"
                            value={formData.minCalories || ''}
                            onChange={(e) => handleFieldChange('minCalories', e, true)}
                        />
                    </Form.Group>
                </Col>
                <Col xs={4}>
                    <Form.Group className="mb-3">
                        <Form.Label>Max Weight</Form.Label>
                        <Form.Control
                            type="text"
                            inputMode='numeric'
                            placeholder="10"
                            value={formData.maxWeight || ''}
                            onChange={(e) => handleFieldChange('maxWeight', e, true)}
                        />
                    </Form.Group>
                </Col>
            </Row>
            <hr />
            <h4>Elements</h4>
            {formData.items.map((item, index) => (
                <Row key={index}>
                    <Col xs={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Item name"
                                value={item.name}
                                onChange={(e) =>
                                    handleItemChange(index, 'name', e)
                                }
                            />
                        </Form.Group>
                    </Col>
                    <Col xs={3}>
                        <Form.Group className="mb-3">
                            <Form.Label>Weight</Form.Label>
                            <Form.Control
                                type="text"
                                inputMode='numeric'
                                placeholder="5"
                                value={item.weight}
                                onChange={(e) =>
                                    handleItemChange(index, 'weight', e, true)
                                }
                            />
                        </Form.Group>
                    </Col>
                    <Col xs={3}>
                        <Form.Group className="mb-3">
                            <Form.Label>Calories</Form.Label>
                            <Form.Control
                                type="text"
                                inputMode='numeric'
                                placeholder="5"
                                value={item.calories}
                                onChange={(e) =>
                                    handleItemChange(index, 'calories', e, true)
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
