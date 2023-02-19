import React from 'react';
import FoodItem from '../components/FoodItem';

function Space() {
    return (
        <div id = "recipeWrapper">
            <div id = "recipeLayout">
                <FoodItem/>
                <FoodItem/>
            </div>
        </div>
        
    );
}

export default Space;