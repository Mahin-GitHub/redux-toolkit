/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset } from '../CounterSlicer/counterSlicer';

const counterDetails = () => {
    const count = useSelector((state) => state.counter.count);

    const dispatch = useDispatch();
    return (
        <div>
            <h2>Count : {count}</h2>
            <button onClick={()=>{dispatch(increment())}}>Increment</button>
            <button onClick={()=>{dispatch(reset())}}>Reset</button>
            <button onClick={()=>{dispatch(decrement())}}>Decrement</button>
        </div>
    );
};

export default counterDetails;