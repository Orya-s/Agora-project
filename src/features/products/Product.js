import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    sellItem,
    buyItem,
    // changeItemPrice,
} from '../inventory/inventorySlice';
import styles from './Products.module.css';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardTitle from 'react-bootstrap/Card';
import CardBody from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.min.css";


const selectTodoById = (state, itemId) => {
    return state.inventory.storeItems.find(item => item.id === itemId)
}

const Product = ({ itemId }) => {
    const item = useSelector(state => selectTodoById(state, itemId))
    const { id, name, price, stock } = item

    const dispatch = useDispatch();

    // const handleInputChange = (key, value) => setAddItem({...addItem, [key]: value})

    return (
        <Col>
            <div className={styles.cardContainer} >
                <Card className="mx-auto my-2">
                    <CardBody>
                        <CardTitle><h4>{name}</h4></CardTitle>
                        <div>Price: {price}$</div>  
                        <div>Stock: {stock}</div>          

                        <div className={styles.btnContainer}>
                            {stock > 0 ? <button onClick={() => { dispatch(buyItem(id))} }>Buy</button> : ""}
                            <button className='sell-btn' onClick={() => { dispatch(sellItem(id))} }>Sell</button>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </Col>
    )
}

export default Product;