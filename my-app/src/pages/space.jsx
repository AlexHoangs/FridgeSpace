import React from 'react';
import FoodItem from '../components/FoodItem';


import bread from "../images/bread.png"
import coffee from "../images/coffee.png"
import meat from "../images/meat.png"
import noodle from "../images/noodle.png"
import pasta from "../images/pasta.png"
import pastaSauce from "../images/pastaSauce.png"


function Space() {
    return (
        <div id = "pageWrapper">
            <div id = "foodsLayout">
                <FoodItem picture={pastaSauce} name="Pasta Sauce" date="04/09/2013" due="10/09/2014"/>
                <FoodItem picture={pasta} name="Pasta" date="04/09/2013" due="4/09/2016"/>
                <FoodItem picture={noodle} name="Noodles" date="04/09/2013" due="4/09/2015"/>
                <FoodItem picture={coffee} name="Coffee" date="04/09/2013" due="4/09/2015"/>
                <FoodItem picture= {bread} name="Bread" date="04/09/2013" due="5/20/2013"/>
                <FoodItem picture={meat} name="Meat" date="04/09/2013" due="5/20/2013"/>
            </div>
        </div>
        
    );
}

export default Space;