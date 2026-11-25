import { useState } from 'react';
import { loginUser, register } from '../service/authApi';

const inputClass =
    'w-full p-2 border border-green-900 rounded mt-2 bg-black text-white placeholder-gray-500';

const getErrorMessage = (error, fallback) =>
    error.response?.data?.message || fallback;

const LoginForm = ({ onLoginSuccess, startInRegister = false }) => {
    const [isRegister, setIsRegister] = useState(startInRegister);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const { data } = await loginUser(username, password);
            setMessage(data.message || 'Login successful');
            setError('');
            setUsername('');
            setPassword('');
            onLoginSuccess?.(data);
        } catch (err) {
            console.log('Login error:', err.message);
            setPassword('');
            setError(getErrorMessage(err, 'Invalid login credentials'));
            setMessage('');
        } finally {
            setLoading(false);
        }
    };

    const handleRegister = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            setMessage('');
            return;
        }

        setLoading(true);
        try {
            const { data } = await register(username, password);
            setIsRegister(false);
            setMessage(data.message || 'Account created. You can log in now.');
            setError('');
            setUsername('');
            setPassword('');
            setConfirmPassword('');
        } catch (err) {
            console.log('Register error:', err.message);
            setPassword('');
            setConfirmPassword('');
            setError(getErrorMessage(err, 'Something went wrong during registration'));
            setMessage('');
        } finally {
            setLoading(false);
        }
    };

    const handleToggle = () => {
        setIsRegister(!isRegister);
        setError('');
        setMessage('');
        setPassword('');
        setConfirmPassword('');
    };

    return (
        <form
            onSubmit={isRegister ? handleRegister : handleLogin}
            className="mx-auto w-full max-w-sm rounded-lg bg-[#0F4D2E] text-white shadow-md"
        >
            <div className="pt-6">
                <h2 className="text-center text-3xl font-bold">
                    {isRegister ? 'Create Account' : 'Login'}
                </h2>
            </div>

            <hr className="my-6 border-green-900" />

            <p className="text-center text-lg font-light text-gray-200">
                {isRegister ? 'Looks like you’re new here!' : 'Good to see you again'}
            </p>

            <div className="p-6">
                <div className="mb-4">
                    <label htmlFor="username" className="text-sm text-gray-200">Username</label>
                    <input
                        id="username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className={inputClass}
                        placeholder="Enter your username"
                        autoComplete="username"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="password" className="text-sm text-gray-200">Password</label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={inputClass}
                        placeholder="Enter your password"
                        autoComplete={isRegister ? 'new-password' : 'current-password'}
                        required
                    />
                </div>

                {isRegister && (
                    <div className="mb-4">
                        <label htmlFor="confirmPassword" className="text-sm text-gray-200">Confirm Password</label>
                        <input
                            id="confirmPassword"
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className={inputClass}
                            placeholder="Enter password again"
                            autoComplete="new-password"
                            required
                        />
                    </div>
                )}

                {error && <p className="mb-3 text-sm text-red-300" role="alert">{error}</p>}
                {message && <p className="mb-3 text-sm text-green-200" role="status">{message}</p>}

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-md bg-black py-2 font-semibold text-white disabled:opacity-60"
                >
                    {loading ? 'Please wait…' : isRegister ? 'Register' : 'Login'}
                </button>

                <p className="pt-4 text-center text-sm text-gray-200">
                    {isRegister ? 'Already have an account?' : 'Don’t have an account?'}
                    <button
                        type="button"
                        onClick={handleToggle}
                        className="ml-1 font-semibold underline"
                    >
                        {isRegister ? 'Login' : 'Create Account'}
                    </button>
                </p>
            </div>
        </form>
    );
};

export default LoginForm;