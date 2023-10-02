import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navgate = useNavigate();
    return (
        <div>Home
            <br />
            <button onClick={() => navgate('/contact-page', { state: { name: 'emmanule' } })}> pass data to contact page</button>
        </div>
    )
}

export default Home