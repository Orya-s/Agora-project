import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

const initialState = {
    storeItems: [],
    userItems: [],
    status: 'idle',
};

export const inventorySlice = createSlice({
    name: 'inventory',
    initialState,
    reducers: {
        addItemToStore: (state, action) => {
            Object.assign(action.payload, {id: uuid()})
            // console.log(action);
            state.storeItems.push(action.payload)
            // console.log(state.storeItems);
        },
        buyItem: (state, action) => {
            state.userItems.push(action.payload)
        },
        changeItemPrice: (state, action) => {
            // let copyItemToUpdate = {... state.storeItems.first(i => i.name == action.payload.name)}
            // const copyStore = [... state.storeItems]
            // let indexItemToUpdate = state.storeItems.findIndex(i => i.name == action.payload.name)
            // let copyItemToUpdate = {... copyStore[indexItemToUpdate]}
            // copyItemToUpdate.price = action.payload
            // copyStore[indexItemToUpdate] = copyItemToUpdate
            // state.storeItems = copyStore
        },
    }
})

export const { addItemToStore, buyItem, changeItemPrice } = inventorySlice.actions;

export const selectStoreItems = (state) => state.inventory.storeItems;
export const selectUserItems = (state) => state.inventory.userItems;

export default inventorySlice.reducer;