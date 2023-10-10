import React from 'react'
import { Provider } from 'react-redux'
import DoToAddForm from './DoToAddForm'
import ToDoListing from './ToDoListing'
import store from './redux_components/store/store'
import { Route, Routes } from 'react-router-dom'
import ReduxTopBar from './ReduxTopBar'
import { PersistGate } from 'redux-persist/integration/react'
import persistStore from 'redux-persist/es/persistStore'

function MainPage() {
    const persistor = persistStore(store)
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <div>MainPage
                    <br />
                    <ReduxTopBar />
                    <Routes>
                        <Route path='/add-to-do' element={<DoToAddForm />} />
                        <Route path='/list-to-do' element={<ToDoListing />} />
                    </Routes>
                </div>
            </PersistGate>
        </Provider>
    )
}

export default MainPage