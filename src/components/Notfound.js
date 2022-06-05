import { useNavigate } from 'react-router-dom';
import '../styles/NotFound.scss';

const NotFound = () => {
    const navigate = useNavigate();
    const goHome = () => {
        navigate('/');
    }

    return (
        <div className="not-found">
            <div>Page not found</div>
            <button onClick={() => goHome()}>Go Home</button>
        </div>
    )
}

export default NotFound;
