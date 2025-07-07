import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '/src/assets/images/logo.png';
import { toast } from 'react-toastify';

const Login = ({ setIsLoggedIn }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Static login check
    if (email === 'root@alicom.com' && password === 'secret') {
      localStorage.setItem('token', 'STATIC_AUTH_TOKEN');
      setIsLoggedIn(true); // ✅ call function
      toast.success('Login Successfully!');
      navigate('/'); // ✅ redirect to dashboard or layout route
    } else {
      toast.error('Invalid credentials!');
    }
  };

  const loginAdmin = () => {
    setEmail('root@alicom.com');
    setPassword('secret');
  };

  return (
    <section className="login-section">
      <div className="thumbnail">
        <img src={logo} alt="thumbnail" width="100%" height="100%" />
      </div>

      <div className="card loginCard">
        <div className="card-body">
          <div className="text-center mt-4">
            <img src={logo} alt="Logo" height="90" style={{ maxWidth: '100%' }} />
          </div>

          <div className="page-content text-center mb-4">
            <p className="pagePera my-3">
              Welcome to <span className="fw-bold btn-outline-info">Admin</span>
            </p>
            <h2 className="pageTitle">Login To Admin</h2>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email">Enter Address</label>
              <input
                type="email"
                name="email"
                id="email"
                className="form-control"
                placeholder="Enter Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password">Password</label>
              <div className="position-relative passwordInput">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  id="password"
                  className="form-control"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <span className="eye" onClick={togglePassword}>
                  <i
                    className={`fa ${showPassword ? 'fa-eye' : 'fa-eye-slash'}`}
                    style={{ cursor: 'pointer' }}
                  ></i>
                </span>
              </div>
            </div>

            <button className="btn loginButton" type="submit">
              Login
            </button>

            <div className="credentials-section mt-3">
              <div className="item">
                <div className="header">Admin Credentials</div>
                <div className="content d-flex justify-content-between align-items-center">
                  <div className="credentials">
                    <span>Email: root@alicom.com</span>
                    <span>Password: secret</span>
                  </div>
                  <div className="copyBtn" onClick={loginAdmin} style={{ cursor: 'pointer' }}>
                    <i className="fa-regular fa-copy"></i>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
