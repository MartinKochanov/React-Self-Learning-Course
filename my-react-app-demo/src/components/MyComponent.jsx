// React hook -> Special fucntion that allows functional components
//               to use React features without writing class components (React v16.8)
//               (useState, useEffect, useContext, useReducer, useCallbacck, and more...)

// useState() -> A React hook that allows the creation of a statefull variable
//               AND a setter function to update its value in the Virtual DOM.
//               [name, setName]  


import React, { useState } from "react";

function MyComponent() {

    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0)
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
        setName('Spongebob')
    }

    const incrementAge = () => {
        setAge(age + 2);
    }

    const toggleEmployedStatus = () => {
        setIsEmployed(!isEmployed);
    }

    return (
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age: {age}</p>
            <button onClick={incrementAge}>Increment Age</button>

            <p>Is employed: {isEmployed ? "Yes" : "No"}</p>
            <button onClick={toggleEmployedStatus}>Toggle Status</button>
        </div>
    );
}

export default MyComponent;