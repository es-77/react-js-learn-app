import React, { createContext, useState } from 'react'
import B from './B'

const firstName = createContext();
const lastName = createContext();

function A() {
    const [name, setName] = useState('Emmanuel')
    const [father, setFather] = useState('Saleem')
    return (
        <>
            <div>A</div>
            <br />
            <input type="text" id='name' name='name' placeholder='Enter your name' onChange={(e) => setName(e.target.value)} />
            <br />
            <input type="text" id='fatherName' name='fatherName' placeholder='Enter your father name' onChange={(e) => setFather(e.target.value)} />
            <br />
            {name}
            <br />

            <firstName.Provider value={name}>
                <lastName.Provider value={father}>
                    <B />
                </lastName.Provider>
            </firstName.Provider>
        </>
    )
}

export default A
export { firstName }
export { lastName }