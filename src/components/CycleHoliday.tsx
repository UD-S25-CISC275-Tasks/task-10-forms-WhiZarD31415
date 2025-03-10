import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday = "🎄" | "🎃" | "🦃" | "👴🏾" | "🎉";

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("🎄");

    function nextAlpha(holiday: Holiday): Holiday {
        if (holiday === "🎄") {
            return "🎃";
        } else if (holiday === "🎃") {
            return "👴🏾";
        } else if (holiday === "🦃") {
            return "🎄";
        } else if (holiday === "👴🏾") {
            return "🎉";
        } else {
            return "🦃";
        }
    }

    function nextDate(holiday: Holiday): Holiday {
        if (holiday === "🎄") {
            return "🎉";
        } else if (holiday === "🎃") {
            return "🦃";
        } else if (holiday === "🦃") {
            return "🎄";
        } else if (holiday === "👴🏾") {
            return "🎃";
        } else {
            return "👴🏾";
        }
    }

    return (
        <div>
            <div>Holiday: {holiday}</div>
            <Button
                onClick={() => {
                    setHoliday(nextAlpha(holiday));
                }}
            >
                Advance By Alphabet
            </Button>
            <Button
                onClick={() => {
                    setHoliday(nextDate(holiday));
                }}
            >
                Advance By Year
            </Button>
        </div>
    );
}
