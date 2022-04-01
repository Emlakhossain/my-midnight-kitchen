import React from 'react';
import './Food.css';

const Food = (props) => {

    const { strMeal, strMealThumb, strInstructions, strCategory } = props.food;

    return (
        <div className='food-items'>
            <img src={strMealThumb} alt="" />
            <div className='text-content'>
                <p>Name:{strMeal}</p>
                <p>Cateegory:{strCategory}</p>
                <p className='' title={strInstructions}>Intro:{strInstructions.length > 40 ? strInstructions.slice(0, 100) + '...' : strInstructions}</p>
            </div>
            <button className='cart-bn'>Add To Cart</button>
        </div>
    );
};

export default Food;