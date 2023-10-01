import React, { useMemo, useState } from 'react'

export default function UseMemoHook() {
    const [countOne, setCountOne] = useState(0);
    const [countTow, setCountTow] = useState(0);
    // if we use some calcution like this then we see other button will give delay  so we use useMemo hook to solve this problem
    // const isEvent = () => {
    //     for (let i = 0; i < 1000000000; i++) { }
    //     return countOne % 2 === 0;
    // }

    // use useMemo hook
    const isEvent = useMemo(() => {
        for (let i = 0; i < 1000000000; i++) { }
        return countOne % 2 === 0;
    }, [countOne])
    return (
        <div>
            UseMemoHook
            <br />
            <button onClick={(e) => setCountOne(countOne + 1)} >count one {countOne} and check count event or odd</button>
            <br />
            {isEvent ? 'Event' : 'Odd'}
            <br />
            <button onClick={(e) => setCountTow(countTow + 1)}>count two {countTow}</button>

        </div>
    )
}
