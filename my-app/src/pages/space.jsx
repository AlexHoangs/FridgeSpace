import React from 'react';
import FoodItem from '../components/FoodItem';

function Space() {
    return (
        <div id = "pageWrapper">
            <div id = "foodsLayout">
                <FoodItem/>
                <FoodItem/>
                <FoodItem/>
                <FoodItem/>
                <FoodItem/>
                <FoodItem/>

            </div>
        </div>
        
    );
}

export default Space;