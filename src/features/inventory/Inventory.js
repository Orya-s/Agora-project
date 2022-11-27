import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    addItemToStore,
    buyItem,
    changeItemPrice,
    // selectStoreItems,
} from './inventorySlice';
import styles from '../counter/Counter.module.css';
import Products from '../products/Products'


const selectItemsIds = state => state.inventory.storeItems.map(item => item.id)

export function Inventory() {
    const storeItemsIds = useSelector(selectItemsIds);
    const dispatch = useDispatch();
    const [addItem, setAddItem] = useState({name: '', price: ''});

    const handleInputChange = (key, value) => setAddItem({...addItem, [key]: value})

    const handleClick = () => {
        if(addItem.name != '' && addItem.price != '') {
            dispatch(addItemToStore(addItem))
            const reset = {name: '', price:''}
            setAddItem(reset)
        }
        else {
            alert('Please fill out all input forms to add an item!')
        }
    }


    return (
        <div>
            <input className={styles.textbox} type='text' aria-label="Set add item name" value={addItem.name} name='name' onChange={e => handleInputChange(e.target.name, e.target.value)} placeholder='Item Name'/>
            <input className={styles.textbox} type='number' aria-label="Set add item price" value={addItem.price} name='price' onChange={e => handleInputChange(e.target.name, e.target.value)} placeholder='Item Price'/>
            
            <button className={styles.button} onClick={ handleClick }>
                Add To Store
            </button>

            {/* {bought ? <BoughtItems /> : ''} */}
            <Products/>
            
        </div>
    )
}