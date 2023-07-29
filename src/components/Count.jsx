import React, { useState } from 'react';

const CountNumber = () => {
    const [count, setCount] = useState(0)
    return (
        <>
            <p>Numer of count is {count}</p>
            <button onClick={() => setCount((prev) => prev + 1)}>Click Here To Increase</button>
            <button onClick={() => setCount((prev) => prev - 1)}>Click Here To Decrease</button>
        </>
    );
}

export default CountNumber;
