import React, { useState } from "react";
import { Form } from "react-bootstrap";

const colors: string[] = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "cyan",
    "magenta",
    "white",
    "black",
];

export function ChangeColor(): React.JSX.Element {
    const [color, setColor] = useState<string>("red");

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>
            <div>
                {colors.map((lcolor: string) => (
                    <Form.Check
                        inline
                        key={lcolor}
                        type="radio"
                        name="color"
                        onChange={updateColor}
                        id="color-check"
                        label={lcolor}
                        value={lcolor}
                        checked={lcolor === color}
                        style={{ backgroundColor: lcolor }}
                    />
                ))}
            </div>
            <div>
                You have chosen{" "}
                <span
                    data-testid="colored-box"
                    style={{ backgroundColor: color }}
                >
                    {color}
                </span>
                .
            </div>
        </div>
    );
}
