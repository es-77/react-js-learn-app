import { createSlice } from "@reduxjs/toolkit"

const UserSlice = createSlice({
    name: 'users',
    initialState: [],
    reducers: {
        addUser(state, action) {
            state.push(action.payload);
        },
        removeUser(state, action) {
            console.log('remove call stae');
        },
        updateUser(state, action) {
            console.log('store update user');
        }
    }
})
export const { addUser, removeUser, updateUser } = UserSlice.actions;
export default UserSlice.reducer;