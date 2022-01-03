import { createSlice } from "@reduxjs/toolkit";
import { items } from "../models/menuItems";

const initialState = {
    selectedItem: undefined,
    menuItems: items,
    itemEditing: undefined,
};

export const slice = createSlice({
    name: 'selectedItem',
    initialState,
    reducers: {
        setSelectedItem: (state, action) => {
            state.selectedItem = action.payload;
        },
        revokeSelectedItem: (state) => {
            state.selectedItem = undefined;
        },
        setMenuItems: (state, action) => {
            state.menuItems = action.payload
        },
        removeMenuItemById: (state, action) => {
            state.menuItems = state.menuItems.filter((item) => item.id !== action.payload);
        },
        setEditingItem: (state, action) => {
            state.itemEditing = action.payload
        },
    },
    
});

export const {setSelectedItem, revokeSelectedItem,
     setMenuItems, removeMenuItemById,setEditingItem} = slice.actions;
export default slice.reducer;
