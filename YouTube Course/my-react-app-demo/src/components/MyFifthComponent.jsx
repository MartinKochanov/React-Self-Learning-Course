import React, { useState } from "react";

function MyFifthComponent() {

    const [foods, setFoods] = useState(['Apple', 'Orange', 'Banana']);

    function handleAddFood() {

        const foodinputElement = document.getElementById('foodInput');
        const newFood = foodinputElement.value;

        setFoods(f => [...f, newFood])
        foodinputElement.value = '';

    }

    function handleRemoveFood(index) {
        setFoods(f => f.filter((_, i) => i !== index))
    }


    return (
        <div className="foods-list-container">
            <h2>List of Food</h2>
            <ul className="foods-list">
                {foods.map((food, index) =>
                    <li key={index} >
                        <p>{food}</p>
                        <button onClick={() => handleRemoveFood(index)}>Remove</button>
                    </li>)}
            </ul>

            <input type="text" id='foodInput' placeholder='Enter food name' />
            <button onClick={handleAddFood}>Add Food</button>
        </div>
    );
}

export default MyFifthComponent;