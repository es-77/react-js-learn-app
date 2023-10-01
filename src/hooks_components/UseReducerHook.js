import React, { useReducer } from 'react'

const initValue = { count: 0, actionType: 'INCREMENT' }
const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1, actionType: 'INCREMENT' };
        case 'DECREMENT':
            return { count: state.count - 1, actionType: 'DECREMENT' };
        default:
            return state;
    }
    return state
}

export default function UseReducerHook() {
    const [state, dispach] = useReducer(reducer, initValue)
    return (
        <div>
            UseReducerHook
            <br />
            {state.actionType}
            <br />
            <button onClick={(e) => dispach({ type: 'INCREMENT' })}>INCREMENT</button>
            {state.count}
            <button onClick={(e) => dispach({ type: 'DECREMENT' })}>DECREMENT</button>
        </div >
    )
}
