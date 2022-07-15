import React, {useContext, useReducer} from 'react';
import {CartContext} from "./CartContext";

const defaultCartState = {
    items: [],
    totalPrice: 0
}

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM': {
            const updatedTotalPrice = state.totalPrice + action.item.price * action.item.amount;

            const existingCartItemIndex = state.items.findIndex((item) => {
                return item.id === action.item.id
            })
            const existingCartItem = state.items[existingCartItemIndex];

            let updatedItem;
            let updatedItems;

            if (existingCartItem) {
                updatedItem = {
                    ...existingCartItem,
                    amount: existingCartItem.amount + action.item.amount
                }
                updatedItems = [...state.items];
                updatedItems[existingCartItemIndex] = updatedItem;
            } else {
                updatedItems = [...state.items, action.item];
            }

            return {
                items: updatedItems,
                totalPrice: updatedTotalPrice
            };
        }
        case 'REMOVE_ITEM': {
            const existingCartItemIndex = state.items.findIndex((item) => {
                return item.id === action.id
            })
            const existingCartItem = state.items[existingCartItemIndex];
            const updatedTotalPrice = state.totalPrice - existingCartItem.price;

            let updatedItem;
            let updatedItems;

            if (existingCartItem.amount > 1) {
                updatedItem = {
                    ...existingCartItem,
                    amount: existingCartItem.amount - 1
                }
                updatedItems = [...state.items];
                updatedItems[existingCartItemIndex] = updatedItem;
            } else {
                updatedItems = state.items.filter((item) => item.id !== action.id)
            }

            return {
                items: updatedItems,
                totalPrice: updatedTotalPrice
            };
        }
    }
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