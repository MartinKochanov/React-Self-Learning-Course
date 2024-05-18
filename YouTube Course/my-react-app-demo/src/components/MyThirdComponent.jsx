//updater function -> A function passed as an argument to setState() usually
//                    ex. setYear(y => y + 1)
//                    Allow for safe updates based on the previous state
//                    Used with multuiple state updates and asynchronous fucntions
//                    Good practice to use updater fucntions

import React, { useState } from "react";

function MyThirdComponent() {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(c => c + 1)
        setCount(c => c + 1)
        setCount(c => c + 1)
    }

    const decrement = () => {
        setCount(c => c - 1)
        setCount(c => c - 1)
        setCount(c => c - 1)
    }

    const reset = () => {
        setCount(0)
    }

    return (
        <div className="counter-container">
            <p className="count-display">{count}</p>
            <button className="counter-button" onClick={decrement}>Decrement</button>
            <button className="counter-button" onClick={reset}>Reset</button>
            <button className="counter-button" onClick={increment}>Increment</button>
        </div>
    )
}

export default MyThirdComponent;