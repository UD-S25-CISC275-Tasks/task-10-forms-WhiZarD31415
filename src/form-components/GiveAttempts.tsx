import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [request, setRequest] = useState<number>(0);

    function updateRequest(event: React.ChangeEvent<HTMLInputElement>) {
        const numRequest: number = parseInt(event.target.value) || 0;
        setRequest(numRequest);
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <div>Attempts Remaining: {attempts}</div>
            <Form.Group controlId="formCheckAnswer">
                <Form.Label>Attempts to Gain:</Form.Label>
                <Form.Control
                    type="number"
                    value={request}
                    onChange={updateRequest}
                />
            </Form.Group>
            <Button
                onClick={() => {
                    setAttempts(attempts - 1);
                }}
                disabled={attempts === 0}
            >
                Use
            </Button>
            <Button
                onClick={() => {
                    setAttempts(attempts + request);
                }}
            >
                Gain
            </Button>
        </div>
    );
}
