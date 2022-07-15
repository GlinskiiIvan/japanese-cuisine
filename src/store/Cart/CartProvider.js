import React, {useContext, useReducer} from 'react';
import {CartContext} from "./CartContext";

const defaultCartState = {
    items: [],
    totalPrice: 0
}

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return {
                items: [...state.items, action.item],
                totalPrice: state.totalPrice + action.item.price * action.item.amount
            };
        case 'REMOVE_ITEM':
            return defaultCartState;
    }
    return defaultCartState;
}

const CartProvider = (props) => {
    const [cartState, cartDispatch] = useReducer(cartReducer, defaultCartState);

    const addItemHandler = (item) => {
        cartDispatch({type: 'ADD_ITEM', item: item});
    };
    const removeItemHandler = (id) => {
        cartDispatch({type: 'REMOVE_ITEM', id: id});
    };

    const cartContext = {
        items: cartState.items,
        totalPrice: cartState.totalPrice,
        addItem: addItemHandler,
        removeItem: removeItemHandler,
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;