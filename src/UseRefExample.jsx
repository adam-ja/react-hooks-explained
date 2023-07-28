import { useEffect, useRef, useState } from "react";

export default function UseRefExample() {
    const [name, setName] = useState('');

    /*
     * useRef is similar to useState, in that it allows us to store a value that is persisted between renders. The
     * difference is it does not cause a rerender when the value changes. So, when the useEffect below is called on
     * every render (because it has no dependencies), the value of renderCount will be incremented and its new value
     * will be shown in the UI, but the component will not rerender. If we had used state instead for the renderCount,
     * we would end up stuck in an infinite loop as each render would cause the state to change, which would cause a
     * re-render, and so on.
     */
    const renderCount = useRef(1);

    useEffect(() => {
        renderCount.current = renderCount.current + 1;
    });

    /*
     * The useRef hook can also be used to store a reference to a DOM element (in conjunction with the ref attribute
     * used in the input element below). This allows us to manipulate the DOM without having to use JS selectors all
     * over the place.
     * However, we should not use refs to manipulate the actual values of elements - that is what state is for. For
     * example, don't do this:
     * `inputRef.current.value = 'some value'`
     * Instead, do this:
     * `setName('some value')`
     */
    const inputRef = useRef();

    function focus() {
        inputRef.current.focus();
    };

    /*
     * Finally, we can use refs to store the previous value of a state variable, which is otherwise lost when the state
     * is updated. That way, we can do things like display the previous value on the screen. We could use another state
     * for this, but then we would be re-rendering the component twice (once for the `name` change and again for the
     * `prevName` change).
     */
    const prevName = useRef('');

    useEffect(() => {
        prevName.current = name;
    }, [name]);

    return (
        <>
            <input ref={inputRef} value={name} onChange={e => setName(e.target.value)} />
            <div>My name is {name} but it used to be {prevName.current}</div>
            <div>I rendered {renderCount.current} times</div>
            <button onClick={focus}>Focus</button>
        </>
    );
};
