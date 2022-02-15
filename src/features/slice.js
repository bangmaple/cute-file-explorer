import { createSlice } from "@reduxjs/toolkit";
import { items } from "../models/menuItems";
import { subMenuItems } from "../models/subMenuItems";

const initialState = {
    selectedItem: undefined,
    menuItems: items,
    subMenuItems: subMenuItems,
    itemEditing: undefined,
    isListRendering: true,
    isItemPreviewed: false,
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
        setSubMenuItems: (state, action) => {
            state.subMenuItems = subMenuItems.filter((item) => item.name.trim().toLowerCase()
            .includes(action.payload.trim().toLowerCase()));
        },
        removeMenuItemById: (state, action) => {
            state.menuItems = state.menuItems.filter((item) => item.id !== action.payload);
        },
        setEditingItem: (state, action) => {
            state.itemEditing = action.payload
        },
        toggleListRendering: (state) => {
            state.isListRendering = !state.isListRendering;
        },
        toggleItemPreview: (state) => {
            state.isItemPreviewed = !state.isItemPreviewed;
        }
    },
    
});

export const {setSelectedItem, revokeSelectedItem,
     setMenuItems, removeMenuItemById,setEditingItem,
      toggleListRendering, setSubMenuItems, toggleItemPreview} = slice.actions;
export default slice.reducer;
