import { Button, Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

function FromModal() {
    return (
        <Form>
            <h4>Trip parameters</h4>
            <Row>
                <Col xs={4}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="My Trip" />
                    </Form.Group>
                </Col>
                <Col xs={4}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Min Calories</Form.Label>
                        <Form.Control type="text" placeholder="5" />
                    </Form.Group>
                </Col>
                <Col xs={4}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                        <Form.Label>Max Weight</Form.Label>
                        <Form.Control type="text" placeholder="10" />
                    </Form.Group>
                </Col>
            </Row>
            <hr />
            <h4>Elements</h4>
            <Row>
                <Col xs={4}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="5" />
                    </Form.Group>
                </Col>
                <Col xs={3}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                        <Form.Label>Weight</Form.Label>
                        <Form.Control type="text" placeholder="5" />
                    </Form.Group>
                </Col>
                <Col xs={3}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
                        <Form.Label>Calories</Form.Label>
                        <Form.Control type="text" placeholder="5" />
                    </Form.Group>
                </Col>
                <Col xs={2}>
                    <Button>+</Button>
                </Col>
            </Row>
        </Form>
    );
}

export default FromModal;