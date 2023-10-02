import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Student from './Student'
import Teacher from './Teacher'

function Class() {
    return (
        <div>
            Class
            <br />
            <Routes>
                <Route path='/student' element={<Student />} />
                <Route path='/teacher' element={<Teacher />} />
            </Routes>
        </div>
    )
}

export default Class