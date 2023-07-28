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
        </ul>
    );
}

export default App;
