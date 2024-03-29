import { Link } from 'react-router-dom';

function App() {
    return (
        <ul>
            <li>
                <Link to="/use-state-example">useState Example</Link>
            </li>
            <li>
                <Link to="/use-effect-example">useEffect Example</Link>
            </li>
            <li>
                <Link to="/use-memo-example">useMemo Example</Link>
            </li>
            <li>
                <Link to="/use-ref-example">useRef Example</Link>
            </li>
            <li>
                <Link to="/use-context-example">useContext Example</Link>
            </li>
            <li>
                <Link to="/use-reducer-example">useReducer Example</Link>
            </li>
            <li>
                <Link to="/use-callback-example">useCallback Example</Link>
            </li>
            <li>
                <Link to="/custom-hook-example">Custom Hook Example</Link>
            </li>
            <li>
                <Link to="/use-layout-effect-example">useLayoutEffect Example</Link>
            </li>
            <li>
                <Link to="/use-transition-example">useTransition Example</Link>
            </li>
            <li>
                <Link to="/use-deferred-value-example">useDeferredValue Example</Link>
            </li>
            <li>
                <Link to="/use-imperative-handle-example">useImperativeHandle Example</Link>
            </li>
            <li>
                <Link to="/use-debug-value-example">useDebugValue Example</Link>
            </li>
            <li>
                <Link to="/use-id-example">useId Example</Link>
            </li>
        </ul>
    );
}

export default App;
