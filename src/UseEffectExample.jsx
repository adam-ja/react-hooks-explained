import { useEffect, useState } from "react";

export default function UseEffectExample() {
    const [resourceType, setResourceType] = useState('posts');
    const [items, setItems] = useState([]);

    useEffect(
        () => {
            fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
                .then(response => response.json())
                .then(json => setItems(json));
        },
        /*
         * The second argument is an array of values that the effect depends on. The effect callback will only be called
         * when one of its dependencies changes.
         * If we pass no second argument, the effect will be called after every render.
         * If we pass an empty array, the effect will only be called when the component mounts but not on render or any
         * other state change.
         */
        [resourceType]
    );

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        /*
         * The return value of the useEffect callback is a cleanup function that will be called whenever the useEffect
         * is "cleaned up". This happens:
         * - when the component unmounts
         * - before each call of the effect callback
        */
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    return (
        <>
            <h1>Window width: {windowWidth}</h1>
            <div>
                <button onClick={() => setResourceType('posts')}>Posts</button>
                <button onClick={() => setResourceType('users')}>Users</button>
                <button onClick={() => setResourceType('comments')}>Comments</button>
            </div>
            <h1>{resourceType}</h1>
            {items.map(item => {
                return <pre>{JSON.stringify(item)}</pre>
            })}
        </>
    );
}
