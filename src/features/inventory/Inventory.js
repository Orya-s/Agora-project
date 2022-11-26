import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    addItemToStore,
    buyItem,
    changeItemPrice,
    // selectStoreItems,
} from './inventorySlice';
import Product from '../products/Product'
import styles from '../counter/Counter.module.css';


const selectItemsIds = state => state.inventory.storeItems.map(item => item.id)

export function Inventory() {
    const storeItemsIds = useSelector(selectItemsIds);
    console.log(storeItemsIds);
    const dispatch = useDispatch();
    const [addItem, setAddItem] = useState({name: '', price: ''});

    const handleInputChange = (key, value) => setAddItem({...addItem, [key]: value})


    return (
        <div>
            <input className={styles.textbox} aria-label="Set add item name" value={addItem.name} name='name' onChange={e => handleInputChange(e.target.name, e.target.value)}/>
            <input className={styles.textbox} aria-label="Set add item price" value={addItem.price} name='price' onChange={e => handleInputChange(e.target.name, e.target.value)}/>
            
            <button className={styles.button} onClick={() => dispatch(addItemToStore(addItem))}>
                Add Item To Store
            </button>

            {storeItemsIds.map((itemId,k) => <Product key={k} itemId={itemId} />)}
            
        </div>
    )
}