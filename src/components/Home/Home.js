import React, { useState } from 'react';
import useFoods from '../../hook/useFoods';
import Cart from '../Cart/Cart';
import Food from '../Food/Food';
import './Home.css';

const Home = () => {
    const [foods, setFoods] = useFoods();
    const [cart, setCart] = useState([]);
    const handleAddToCart = seclectedItem => {
        const exist = cart.find(food => food.idMeal === seclectedItem.idMeal);
        if (!exist) {
            const newCart = [...cart, seclectedItem];
            setCart(newCart)
        }
        else {
            alert('item already added');
        }

    }

    const handleRemoveFromCart = (reoveItem) => {
        const restItem = cart.filter(food => food.idMeal !== reoveItem.idMeal);
        setCart(restItem)
    }

    return (
        <div className='home-container'>
            <div className="food-container">
                {
                    foods.map(food => <Food
                        key={food.idMeal}
                        food={food}
                        handleAddToCart={handleAddToCart}
                    ></Food>)
                }

            </div>
            <div className="cart-container">
                <Cart
                    handleRemoveFromCart={handleRemoveFromCart}
                    cart={cart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;