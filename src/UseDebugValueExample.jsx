import { useState } from "react";
import useLocalStorage from "./useLocalStorage";

export default function UseDebugValueExample() {
    // See useLocalStorage implementation for useDebugValue example.
    const [firstName, setFirstName] = useLocalStorage('firstName', 'Adam');
    const [lastName, setLastName] = useState('Auskerin');

    return (
        <>
            First:{' '}
            <input value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            <br />
            Last:{' '}
            <input value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </>
    )
}
