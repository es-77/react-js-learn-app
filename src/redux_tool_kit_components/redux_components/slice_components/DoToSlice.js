// DoToSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const doToSlice = createSlice({
    name: "dotos",
    initialState,
    reducers: {
        addToDo(state, action) {
            state.push(action.payload);
        },
        removeToDo(state, action) {
            return state.filter(todo => todo.name !== action.payload);
        },
        updateToDo(state, action) {
            const { name, type } = action.payload;
            return state.map(todo =>
                todo.name === name ? { ...todo, type } : todo
            );
        }
    }
});

export const { addToDo, removeToDo, updateToDo } = doToSlice.actions;
export default doToSlice.reducer;
