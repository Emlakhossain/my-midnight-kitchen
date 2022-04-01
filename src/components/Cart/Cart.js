import React from 'react';
import './Cart.css';

const Cart = ({ cart, handleRemoveFromCart }) => {

    let addFood;
    if (cart.length === 0) {
        addFood = <p>Please add food at list one item</p>
    }
    else if (cart.length === 1) {
        addFood = <p>please add one more food</p>
    }
    else {
        addFood = <p>Thank you adding product</p>
    }
    return (
        <div className='cart-item'>
            <p>seclected ItemS: {cart.length}</p>
            {addFood}
            {
                cart.map(food => <p>
                    Item Name: {food.strMeal}
                    <button className='cart-btn' onClick={() => handleRemoveFromCart(food)}>X</button>
                </p>)

            }
            {/* ternary operator conditional system */}
            {
                cart.length !== 4 ? <p>Please add at list 4 items</p> : <button>Remove all</button>
            }

        </div>
    );
};

export default Cart;