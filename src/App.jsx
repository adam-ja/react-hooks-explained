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
        </ul>
    );
}

export default App;
