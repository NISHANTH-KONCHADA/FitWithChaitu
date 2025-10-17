import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';
import Button from '../components/Button';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Hardcoded credentials for demonstration
    // In a real app, this would be a request to a backend server.
    if (email === 'admin@fitwithchaitu.com' && password === 'password123') {
      const fakeToken = 'secret-auth-token';
      login(fakeToken);
      navigate('/dashboard');
    } else {
      setError('Invalid email or password.');
    }
    setIsLoading(false);
  };

  return (
    <div className="container mx-auto px-6 py-20 flex justify-center items-center">
      <div className="w-full max-w-md bg-black/20 p-8 rounded-lg border border-accent-cream/10">
        <h1 className="text-4xl font-heading text-accent-cream text-center mb-2">Client Login</h1>
        <div className="w-20 h-1 bg-primary-red mx-auto mb-8"></div>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-accent-cream/70 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-accent-cream/10 border border-accent-cream/20 rounded-md p-3 text-accent-cream placeholder-accent-cream/50 focus:outline-none focus:ring-2 focus:ring-primary-red"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-accent-cream/70 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-accent-cream/10 border border-accent-cream/20 rounded-md p-3 text-accent-cream placeholder-accent-cream/50 focus:outline-none focus:ring-2 focus:ring-primary-red"
              required
            />
          </div>
          {error && <p className="text-red-400 text-sm">{error}</p>}
          <div>
            <Button type="submit" variant="primary" className="w-full py-3 text-lg" disabled={isLoading}>
              {isLoading ? 'Logging In...' : 'Login'}
            </Button>
          </div>
          <div className="text-center text-xs text-accent-cream/50 pt-2">
            <p>Demo credentials:</p>
            <p>Email: admin@fitwithchaitu.com</p>
            <p>Password: password123</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;