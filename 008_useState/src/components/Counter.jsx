import React, { useState } from 'react';

function Counter() {

    const [count, setCount] = useState(0);

    function Increment() {
        setCount(count + 1);
    }

    function Decrement() {
        setCount(count - 1);
    }

    const jumpBy5 = () => {
        setCount(count + 5);
    };

    return (
        <div className="counter">
            <h1>Counter</h1>
            <p>{count}</p>
            <button onClick={Increment} className="Increase">Increment</button>
            <button onClick={Decrement} className="Decrease">Decrement</button>
            <button onClick={jumpBy5} className="JumpBy5">Jump by 5</button>
        </div>
    );
}

export default Counter;