/* eslint-disable react/prop-types */
import { Card } from "react-bootstrap";

function HistoryCard({ totalCalories, totalWeight, name, optimalItems }) {
    return (
        <Card
            className="mb-3 app-container-card"
            border="primary"
        >
            <Card.Header><h3>{name}</h3></Card.Header>
            <Card.Body>
                <Card.Text>
                    <strong>Total Calories :</strong> {totalCalories}
                </Card.Text>
                <Card.Text>
                    <strong>Total Weight:</strong> {totalWeight}
                </Card.Text>
                <Card.Text>
                    <strong>Optimal Items:</strong> {optimalItems.join(', ')}
                </Card.Text>
            </Card.Body>
        </Card>)
}

export default HistoryCard;