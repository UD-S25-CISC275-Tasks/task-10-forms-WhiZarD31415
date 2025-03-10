import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [started, setStarted] = useState<boolean>(false);

    function start(): void {
        setAttempts(attempts - 1);
        setStarted(true);
    }
    return (
        <div>
            <div>Attempts left: {attempts}</div>
            <Button onClick={start} disabled={attempts === 0 || started}>
                Start Quiz
            </Button>
            <Button
                onClick={() => {
                    setStarted(false);
                }}
                disabled={!started}
            >
                Stop Quiz
            </Button>
            <Button
                onClick={() => {
                    setAttempts(attempts + 1);
                }}
                disabled={started}
            >
                Mulligan
            </Button>
        </div>
    );
}
