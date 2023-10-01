import React, { useEffect, useState } from 'react'

export default function UseEffectHook() {
    const [state, setState] = useState('posts');
    const [count, setCount] = useState(0);
    const [items, setItems] = useState([])

    /**
     * useEffect life cycle
     * component did mount
     * component did update
     * component did unmount
     */
    // first example 
    // useEffect(() => {
    //     console.log('component did mount');
    // }, []);

    //second example
    // useEffect(() => {
    //     console.log('component did update');
    // });
    // thrid example
    useEffect(() => {
        console.log('component did update');
        return () => {
            console.log('component did unmount');
        }
    })

    // condition render useEffect
    useEffect(() => {
        console.log('count ');
    }, [count])

    // using useEffect api call
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/' + state)
            .then(repose => repose.json())
            // .then(json => console.log(json))
            .then(json => setItems(json))
    })
    return (
        <div>
            UseEffectHook <br />
            <>
                <button onClick={() => setState('posts')}>post</button>
                <button onClick={() => setState('comments')}>comments</button>
                <button onClick={() => setState('users')}>users</button>

                <h1>{state}</h1>

                <br />
                <button onClick={() => setCount(count + 1)}> count increment</button>
                <br />
                {count}
                <br />
                {/* {console.log('items', items)} */}
                {items && items.map((item) => {
                    // return <pre>{JSON.stringify(item)}</pre>
                    return <> <h1>{item.id}</h1></>
                })}

            </>
        </div>
    )
}
