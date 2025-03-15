import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [answer, setAnswer] = useState<string>("");
    // This is the Control
    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
    }

    // This is the View
    return (
        <div>
            <Form.Group controlId="formCheckAnswer">
                <Form.Label>Your Answer:</Form.Label>
                <Form.Control value={answer} onChange={updateAnswer} />
            </Form.Group>
            {answer === expectedAnswer ?
                <div>✔️</div>
            :   <div>❌</div>}
        </div>
    );
}
