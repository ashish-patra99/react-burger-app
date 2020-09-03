import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";


const burger = (props) => {
    const dynamicIngredient = Object.keys(props.ingredients).map(layerKey => {
        return [...Array(props.ingredients[layerKey])].map((_, i) => {
           return <BurgerIngredient key={layerKey+i} type={layerKey} />
        });
    });


return (
    <div className={classes.Burger}>
        <BurgerIngredient type="bread-top" />
        {dynamicIngredient}
        <BurgerIngredient type="bread-bottom" />
    </div>
)

}

export default burger;