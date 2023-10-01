import React, { useCallback, useState } from 'react'
import Child from './Child'

function Parent() {
    const [countOne, setCountOne] = useState(0);
    const [countTow, setCountTow] = useState(0);
    const [childData, setChildData] = useState('no data');
    // const getItems = () => {
    //     //  the call back function run on everu time when any state change
    //     for (let index = 0; index < 1000000000; index++) { }
    //     console.log('countTow', countTow);
    //     return [countTow, countTow]
    // }

    const getItems = useCallback((data) => {
        setChildData(data)
        for (let index = 0; index < 1000000000; index++) { }
        console.log('countTow', countTow);
        return [countTow, countTow + 1]
    }, [countTow])

    return (
        <div>
            Parent
            <br />
            {childData}
            <br />

            <button onClick={(e) => setCountOne(countOne + 1)}> count one : {countOne}</button>
            <br />
            <button onClick={(e) => setCountTow(countTow + 1)}>count two : {countTow}</button>
            <Child getItems={getItems} />
        </div>
    )
}

export default Parent