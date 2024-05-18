
import React, { useState } from "react";

function ColorPicker() {

    const [color, setColor] = useState('#fff');

    function handleColorChange(event) {
        setColor(event.target.value)
    }


    return (
        <div className="color-picker-cotainer">
            <h1>Color Picker</h1>
            <p>Selected Color: {color}</p>
            <div className="color-display" style={{ backgroundColor: color }}>
            </div>
            <label>Select a Color:</label>
            <input type="color" value={color} onChange={handleColorChange} />
        </div>
    );
}

export default ColorPicker;