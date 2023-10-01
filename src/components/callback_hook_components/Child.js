import React, { useEffect, useState } from 'react'

function Child({ getItems }) {
    const [items, setItems] = useState([]);
    const [text, setText] = useState('children data will here when you enter text into input')
    useEffect(() => {
        setItems(getItems(text));
    }, [getItems, text])
    // const items = getItems();
    // console.log('Items from Child:', items);
    return (
        <div>
            Child
            <br />
            <input type="text" onChange={(e) => setText(e.target.value)} />
            <br />
            {items && items.map(item => {
                return <p key={item}>{item}</p>
            })}
        </div>
    )
}

export default Child