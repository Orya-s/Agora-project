import React from 'react';
import { useSelector } from 'react-redux';
import Product from '../products/Product';
import { selectStoreItems } from '../inventory/inventorySlice';
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import styles from './Products.module.css';


const selectItemsIds = state => state.inventory.storeItems.map(item => item.id)

const Products = () => {
    const storeItemsIds = useSelector(selectItemsIds);
    const storeItems = useSelector(selectStoreItems);

    return (
        <div>
            <div className={styles.numItems}> Total Items: {storeItems.length}</div>
            <Container>
                <Row xs={2} md={4}>
                    {storeItemsIds.map((itemId,k) => <Product key={k} itemId={itemId} />)}
                </Row>
            </Container> 
        </div>
    )
}

export default Products;