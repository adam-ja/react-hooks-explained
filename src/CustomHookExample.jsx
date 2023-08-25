import useLocalStorage from './useLocalStorage';
import useUpdateLogger from './useUpdateLogger';

export default function CustomHookExample () {
    const [name, setName] = useLocalStorage('name', 'Adam');

    useUpdateLogger('name', name);

    return (
        <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
        />
    );
}
