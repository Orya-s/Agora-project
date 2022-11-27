import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import {
//     // buyItem,
//     // changeItemPrice,
// } from './inventorySlice';
import styles from './Products.module.css';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.min.css";


const selectTodoById = (state, itemId) => {
    // console.log(itemId);
    return state.inventory.storeItems.find(item => item.id === itemId)
}

const Product = ({ itemId }) => {
    const item = useSelector(state => selectTodoById(state, itemId))
    const { id, name, price, inStore } = item
    // console.log(inStore);

    const dispatch = useDispatch();
    const [addItem, setAddItem] = useState({name: '', price: ''});

    // const itemPrice = Number(addItem.price) || 0;
    // const handleInputChange = (key, value) => setAddItem({...addItem, [key]: value})

    const buyItem = () => {

    }

    return (
        <Col>
            <div className={styles.cardContainer} >
                <Card>
                    <h3>{name}</h3>  
                    <div>Price: {price}$</div>          
                    {/* <button className={styles.button} onClick={() => dispatch(addItemToStore(addItem))}>
                        Add Item To Store
                    </button> */}

                    <div className={styles.btnContainer}>
                        <button className={styles.buyItemBtn} onClick={(e) => 
                            {
                                buyItem()
                                e.preventDefault();
                            }}>{inStore ? "+" : "-"}</button>
                    </div>
                </Card>
            </div>
        </Col>
    )
}

export default Product;