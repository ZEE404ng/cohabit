import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';

const Login = ({ startInRegister = false }) => {
    const navigate = useNavigate();

    const handleLoginSuccess = (data) => {
        try {
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(data.user));
        } catch (err) {
            console.log('Could not save session:', err.message);
        }
        navigate('/listings');
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-[#0A0D0B] px-4">
            <LoginForm
                onLoginSuccess={handleLoginSuccess}
                startInRegister={startInRegister}
            />
        </div>
    );
};

export default Login;