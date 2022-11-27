import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Product from '../products/Product';
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const selectItemsIds = state => state.inventory.storeItems.map(item => item.id)

function Products() {
    const storeItemsIds = useSelector(selectItemsIds);

    return (
        <div>
            <Container>
                <Row xs={1} md={3}>
                    {storeItemsIds.map((itemId,k) => <Product key={k} itemId={itemId} />)}
                </Row>
            </Container> 
        </div>
    )
}

export default Products;