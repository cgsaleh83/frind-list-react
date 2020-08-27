import React from 'react';
import './Cart.css';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLuggageCart } from "@fortawesome/free-solid-svg-icons";

const Cart = (props) => {
    const user = props.user;
    const totalPrice = user.reduce((total, course) => total + course.price, 0);
    
    // let totalPrice = 0;
    // for (let i = 0; i < user.length; i++) {
    //     const course = user[i];
    //     totalPrice = totalPrice + course.price
    // }

   

    return (
        <div className='course-cart'>
            <h4>Order Summery</h4>
            <h5>Items Order: <span>{user.length}</span></h5>
            <h5>Total Price: <span>{totalPrice }</span></h5>
            <Button color="success"><FontAwesomeIcon icon={faLuggageCart} /> <span className='btn-order'>Order Now</span> </Button>
        </div>
    );
};

export default Cart;