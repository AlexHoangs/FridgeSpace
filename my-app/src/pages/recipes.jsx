import React from 'react';
import RecipeItem from '../components/RecipeItem';

import sphaghetti from "../images/sphaghetti.png";
import coffeeToast from "../images/coffeeToast.png";

function Recipes() {
    return (
        <div id = "recipeWrapper">
            <div id = "recipeLayout">
                <RecipeItem picture={sphaghetti} name="Sphaghetti" date="06/03/2013" due="12/03/2013"/>
                <RecipeItem picture={coffeeToast} name="Coffee and Toast" date="04/09/2013" due="5/09/2016"/>
            </div>
        </div>
        
    );
}

export default Recipes;