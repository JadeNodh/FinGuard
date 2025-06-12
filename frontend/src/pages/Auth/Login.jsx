import React, { useState } from 'react';
// import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import './login.css';
import finguardLogo from '../../assets/finguard.jpg';
import loginBg from '../../assets/loginbg.jpg';
// import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate('/dashboard');
    } catch (error) {
      console.error('Google login error:', error.message);
      setError(error.message);
    }
  };

  return (
    <div className="login-page" style={{ 
      backgroundImage: `url(${loginBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div className="login-card">
        <img 
          src={finguardLogo} 
          alt="FinGuard Logo" 
          className="logo" 
        />
        <h2 className="login-title">Login to FinGuard</h2>
        
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="form-input"
            />
          </div>
          
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="form-input"
            />
          </div>
          
          <button type="submit" className="login-button">
            Login
          </button>
          
          <div className="divider">or</div>
          
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="google-login-button"
          >
            <img
              src="https://developers.google.com/identity/images/g-logo.png"
              alt="Google"
              className="google-icon"
            />
            Sign in with Google
          </button>
        </form>
        
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
}

export default Login;