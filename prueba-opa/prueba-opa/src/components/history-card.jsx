/* eslint-disable react/prop-types */
import { Card } from "react-bootstrap";

function HistoryCard({ totalCalories, totalWeight, name, optimalItems }) {
    return (
        <Card
            className="mb-2"
            border="primary"
        >
            <Card.Header><h3>{name}</h3></Card.Header>
            <Card.Body>
                <Card.Text>
                    Total Calories : {totalCalories}
                </Card.Text>
                <Card.Text>
                    Total Weight: {totalWeight}
                </Card.Text>
                <Card.Text>
                    Optimal Items: {optimalItems.join(', ')}
                </Card.Text>
            </Card.Body>
        </Card>)
}

export default HistoryCard;