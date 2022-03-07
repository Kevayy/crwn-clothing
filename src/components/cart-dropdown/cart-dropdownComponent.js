import React from "react";

import CustomButton from '../custom-button/custom-buttonComponent';

import './cart-dropdown.scss';

const CartDropdown = () => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items" />
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

export default CartDropdown;