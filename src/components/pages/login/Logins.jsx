import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Logins = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const togglePassword = () => setShowPassword((prev) => !prev);

  const fillCredentials = () => {
    setEmail('root@alicom.com');
    setPassword('secret');
    setError('');
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Static credentials
    const staticEmail = 'root@alicom.com';
    const staticPassword = 'secret';

    if (email === staticEmail && password === staticPassword) {
      // Store login flag in localStorage
      localStorage.setItem('isLoggedIn', 'true');

      // Redirect to dashboard or main page
      navigate('/'); // Adjust route as needed
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <section className="login-section">
      <div className="thumbnail">
        <img
          src="https://demo.alicom.app/assets/images/login.png"
          alt="thumbnail"
          width="100%"
        />
      </div>

      <div className="card loginCard">
        <div className="card-body">
          <div className="text-center mt-4">
            <img
              src="https://demo.alicom.app/storage/logo/Xjd351SVOEDXdwp70TA5mysABikxeUwFMVW9isbF.svg"
              alt="Alicom Logo"
              height="80"
              style={{ maxWidth: '100%' }}
            />
          </div>

          <div className="page-content text-center mb-4">
            <p className="pagePera my-3">
              Welcome to <span className="fw-bold text-primary">Alicom</span>
            </p>
            <h2 className="pageTitle">Login To Admin</h2>
          </div>

          <form onSubmit={handleLogin}>
            {error && <div className="alert alert-danger">{error}</div>}

            <div className="mb-3">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                name="email"
                id="email"
                className="form-control1"
                placeholder="Enter Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
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
                <span
                  className="eye"
                  onClick={togglePassword}
                  style={{ cursor: 'pointer' }}
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </span>
              </div>
            </div>

            <button className="btn loginButton" type="submit">
              Login
            </button>

            <div className="credentials-section mt-3">
              <div className="item">
                <div className="header">Admin Credentials</div>
                <div className="content d-flex align-items-center justify-content-between">
                  <div className="credentials">
                    <span>Email: root@alicom.com</span>
                    <span>Password: secret</span>
                  </div>
                  <div
                    className="copyBtn"
                    onClick={fillCredentials}
                    style={{ cursor: 'pointer' }}
                  >
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

export default Logins;
