import { useState } from 'react';

function App() {
    /*
     * If we need to do some calculation to initialise the state, rather than a hardcoded value such as `0`, we can.
     * However, we should avoid putting a function call directly inside `useState()` as the function will then be called
     * on every render rather than just the first. Instead, we can pass it as an initialiser function or use a callback.
     *
     * @see https://react.dev/reference/react/useState#avoiding-recreating-the-initial-state
     */
    const [count, setCount] = useState(0);

    function decrementCount() {
        /*
         * When updating state based on the previous state, it is best to use a callback as seen below as opposed to
         * simply `setCount(count - 1)`.
         *
         * @see https://react.dev/reference/react/useState#updating-state-based-on-the-previous-state
         */
        setCount(prevCount => prevCount - 1);
    }

    function incrementCount() {
        setCount(prevCount => prevCount + 1);
    }

    return (
        <div id="counter">
            <button onClick={decrementCount}>-</button>
            <span>{count}</span>
            <button onClick={incrementCount}>+</button>
        </div>
    );
}

export default App;
