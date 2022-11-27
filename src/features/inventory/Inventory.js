import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItemToStore } from './inventorySlice';
import styles from './Inventory.module.css';
import Products from '../products/Products'



export function Inventory() {
    const dispatch = useDispatch();
    const [addItem, setAddItem] = useState({name: '', price: '', stock: ''});

    const handleInputChange = (key, value) => setAddItem({...addItem, [key]: value})

    const handleClick = () => {
        if(addItem.name !== '' && addItem.price !== '' && addItem.stock !== '') {
            dispatch(addItemToStore(addItem))
            const reset = {name:'', price:'', stock:''}
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
            <input className={styles.textbox} type='number' aria-label="Set add item stock" value={addItem.stock} name='stock' onChange={e => handleInputChange(e.target.name, e.target.value)} placeholder='Item Stock'/>
            
            <button className={styles.button} onClick={ handleClick }>
                Add To Store
            </button>

            <Products/>
            
        </div>
    )
}