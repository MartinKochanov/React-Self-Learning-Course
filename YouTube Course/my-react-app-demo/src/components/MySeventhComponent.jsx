// useEffect() -> React Hook that tells React DO SOME CODE WHEN (pick one):
//                This component re-renders
//                This component mounts
//                The state of a value

// useEffect(function, [dependancies])                

// 1. useEffect(() => {})           // Runs after every re-render
// 2. useEffect(() => {}, [])           // Runs only on mount
// 3. useEffect(() => {}, [value])           // Runs on mount + when value changes    

// USES 
// #1 Event Listeners
// #2 DOM manipulation
// #3 Subscriptions (real-time updates)
// #4 Fetching Data from an API
// #5 Clean up when a component unmounts

import React, { useState, useEffect } from "react";

function MySeventhComponent() {

    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)

    // Without useEffect() -> add event listener every time we resize the window (NOT GOOD)
    // window.addEventListener("resize", handleResize);
    // console.log("EVEN LISTENER ADDED");

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("EVEN LISTENER ADDED");

        return () => {
            window.removeEventListener("resize", handleResize);
            console.log("EVENT LISTENER REMOVED");
        }
    }, []);

    useEffect(() => {
        document.title = `Size: ${width} x ${height}`;
    }, [width, height]);

    function handleResize() {
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }



    return (
        <>
            <p>Window Width: {width}px</p>
            <p>Window Height: {height}px</p>
        </>
    );
}

export default MySeventhComponent;
