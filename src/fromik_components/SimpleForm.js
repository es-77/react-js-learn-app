import React, { useState } from 'react'

function SimpleForm() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [channel, setChannel] = useState('')

    const handleSubmit = () => {
        console.log(name, email, channel)
    }
    return (
        <div>SimpleForm
            <form>

                <br />
                <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                <br />
                <input type="text" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <br />
                <input type="text" name="channel" id="channel" value={channel} onChange={(e) => setChannel(e.target.value)} />
                <br />
                <button type='button' onClick={handleSubmit}>Save Data</button>
            </form>
        </div>
    )
}

export default SimpleForm