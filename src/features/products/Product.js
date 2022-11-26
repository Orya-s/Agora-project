import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import {
//     // buyItem,
//     // changeItemPrice,
// } from './inventorySlice';
import styles from '../counter/Counter.module.css';

const selectTodoById = (state, itemId) => {
    // console.log(itemId);
    return state.inventory.storeItems.find(item => item.id === itemId)
}

const Product = ({ itemId }) => {
    const item = useSelector(state => selectTodoById(state, itemId))
    console.log(item);
    const { id, name, price } = item

    const dispatch = useDispatch();
    const [addItem, setAddItem] = useState({name: '', price: ''});

    // const itemPrice = Number(addItem.price) || 0;
    // const handleInputChange = (key, value) => setAddItem({...addItem, [key]: value})

    return (
        <div>
            <div>{name}- {price}$</div>            
            {/* <button className={styles.button} onClick={() => dispatch(addItemToStore(addItem))}>
                Add Item To Store
            </button> */}
            
        </div>
    )
}

export default Product;