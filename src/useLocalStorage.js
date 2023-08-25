import { useDebugValue, useEffect, useState } from "react";

function getSavedValue(key, initialValue) {
    const savedValue = JSON.parse(localStorage.getItem(key));

    if (savedValue) {
        return savedValue;
    }

    if (initialValue instanceof Function) {
        return initialValue();
    }

    return initialValue;
}

function getValueSlowly(value) {
    for (let i = 0; i < 1000000000; i++) {
        // do nothing
    }

    return value;
}

/*
 * Custom hooks should always begin with `use`
 */
export default function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
        return getSavedValue(key, initialValue);
    });

    /*
     * useDebugValue is a React hook that can only be used in custom hooks. It allows us to display a value for the
     * custom hook that will appear in the React DevTools. In this simple example, we would already be able to see the
     * value state just by expanding the LocalStorage hook in the React DevTools. However, in more complex hooks that
     * might have a lot of state, useDebugValue lets us summarise that state so that we don't have to dig many levels
     * deep into the hook to see what's going on.
     */
    useDebugValue(key);

    /*
     * useDebugValue is not without its performance implications, since it will be called every time the custom hook is
     * called. If the value we want to output is expensive to calculate, we can pass a second argument to useDebugValue
     * which is a function that will be called to calculate the value. This function will only be called when the React
     * DevTools are open and the component is being inspected.
     */
    // useDebugValue(getValueSlowly(value));
    useDebugValue(value, v => getValueSlowly(v));

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value]);

    return [value, setValue];
}
