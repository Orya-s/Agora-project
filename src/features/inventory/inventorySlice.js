import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

const initialState = {
    storeItems: []
};

export const inventorySlice = createSlice({
    name: 'inventory',
    initialState,
    reducers: {
        addItemToStore: (state, action) => {
            Object.assign(action.payload, {id: uuid()})
            state.storeItems.push(action.payload)
        },
        buyItem: (state, action) => {
            const itemId = action.payload
            const item = state.storeItems.find(i => i.id === itemId)
            item.stock = Number(item.stock) - 1
        },
        sellItem: (state, action) => {
            const itemId = action.payload
            const item = state.storeItems.find(i => i.id === itemId)
            item.stock = Number(item.stock) + 1
        },
        changeItemPrice: (state, action) => {
            console.log(action);
            const {price, id} = action.payload
            const item = state.storeItems.find(i => i.id === id)
            item.price = Number(price) 
        },
    }
})

export const { addItemToStore, buyItem, sellItem, changeItemPrice } = inventorySlice.actions;

export const selectStoreItems = (state) => state.inventory.storeItems;

export default inventorySlice.reducer;