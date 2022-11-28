import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    sellItem,
    buyItem,
    changeItemPrice
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
    const [newPrice, setNewPrice] = useState(price);
    const [showPriceInput, setShowPriceInput] = useState(false);

    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        setNewPrice(e.target.value)
        dispatch(changeItemPrice({price: e.target.value, id}))
    }

    return (
        <Col>
            <div className={styles.cardContainer} >
                <Card> 
                    <CardBody>
                        <CardTitle><h4>{name}</h4></CardTitle>
                        { showPriceInput ? 
                        <input type='number' className={styles.priceInput} value={newPrice} onChange={e => handleInputChange(e)} onBlur={() => setShowPriceInput(false)} autoFocus></input> : 
                        <div onDoubleClick={() => setShowPriceInput(true)}>Price: {price}$</div> }
                        <div>Stock: {stock}</div>          
                    </CardBody>
                    <div className={styles.btnContainer}>
                        {stock > 0 ? <button onClick={() => { dispatch(buyItem(id))} } className={styles.btn} >Buy</button> : ""}
                        <button className={styles.btn} onClick={() => { dispatch(sellItem(id))} }>Sell</button>
                    </div>
                </Card>
            </div>
        </Col>
    )
}

export default Product;