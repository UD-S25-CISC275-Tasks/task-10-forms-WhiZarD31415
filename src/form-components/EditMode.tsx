import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [editmode, setEditmode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [student, setStudent] = useState<boolean>(true);
    const studentStr: string = student ? "" : "not ";

    function updateEditmode(event: React.ChangeEvent<HTMLInputElement>) {
        setEditmode(event.target.checked);
    }

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setStudent(event.target.checked);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                label="Edit Mode?"
                id="formEdit"
                checked={editmode}
                onChange={updateEditmode}
            />
            {!editmode && (
                <div>
                    {name} is {studentStr}a student
                </div>
            )}
            {editmode && (
                <div>
                    <Form.Group controlId="formUpdateName">
                        <Form.Label>Enter your name here:</Form.Label>
                        <Form.Control value={name} onChange={updateName} />
                    </Form.Group>
                    <Form.Check
                        type="switch"
                        label="Student?"
                        id="formStudent"
                        checked={student}
                        onChange={updateStudent}
                    />
                </div>
            )}
        </div>
    );
}
