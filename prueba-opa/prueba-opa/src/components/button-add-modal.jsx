/* eslint-disable react/prop-types */
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FromModal from './form-modal';
import { toast } from 'react-toastify';
function ButtonAddModal({ onSave }) {
    const [show, setShow] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        minCalories: '',
        maxWeight: '',
        items: [{name: '', calories: '', weight: ''}],
    });
    
    const disableButton = !formData.name || !formData.minCalories || !formData.maxWeight || formData.items.some((el) => !el.name || !el.calories || !el.weight);
    console.log(disableButton);    

    const handleClose = () => {
        setFormData({name: '',
            minCalories: '',
            maxWeight: '',
            items: [{name: '', calories: '', weight: ''}]})
        setShow(false);
    }

    const handleShow = () => setShow(true);

    const handleSave = () => {
        
        fetch('http://localhost:3000/trips', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                onSave(data);
                setFormData({
                    name: '',
                    minCalories: '',
                    maxWeight: '',
                    items: [{name: '', calories: '', weight: ''}],
                });
                setShow(false);
                toast.success(`Trip ${formData.name} added successfully`);
            })
            .catch((error) => {
                console.error('Error:', error);
                toast.error(`Trip ${formData.name} could not be saved, please try again`);
            });
    };

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
                    <FromModal formData={formData} setFormData={setFormData} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button disabled={disableButton} variant="primary" onClick={handleSave}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ButtonAddModal;
