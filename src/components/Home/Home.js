import React from 'react';
import useFoods from '../../hook/useFoods';
import Cart from '../Cart/Cart';
import Food from '../Food/Food';
import Foods from '../Foods/Foods';
import './Home.css';

const Home = () => {
    const [foods, setFoods] = useFoods();
    console.log(foods)
    return (
        <div className='home-container'>
            <div className="food-container">
                {
                    foods.map(food => <Food
                        key={food.idMeal}
                        food={food}

                    ></Food>)
                }

            </div>
            <div className="cart-container">
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Home;