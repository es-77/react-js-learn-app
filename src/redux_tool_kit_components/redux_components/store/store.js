import { combineReducers, configureStore } from '@reduxjs/toolkit'
import UserSlice from '../slice_components/UserSlice'
import DoToSlice from '../slice_components/DoToSlice'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
};

const reducer = combineReducers({
    users: UserSlice,
    todos: DoToSlice
});

const persistReducers = persistReducer(persistConfig, reducer)

const store = configureStore({
    reducer: persistReducers
})

export default store