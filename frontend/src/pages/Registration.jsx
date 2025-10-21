import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Registration.css";
import registerImage from "../assets/graph-4737109_1920.jpg";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    try {
      // Send data to the backend server
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        email,
        password,
      });
      console.log(res.data);
      navigate("/login");
    } catch (err) {
      console.error(err.response.data);
      alert("Error registering user");
    }
  };

  return (
    <div className="register-page-container">
      <div className="register-form-container">
        <div className="register-form-section">
          <form className="register-form" onSubmit={handleSubmit}>
            <h2>Create Your Account</h2>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input
                type="password"
                id="confirm-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="register-button">Register</button>
            <p className="login-link">
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </form>
        </div>
        <div className="register-image-section" style={{ backgroundImage: `url(${registerImage})` }}>
          <div className="overlay">
            <h1>Join Our Community</h1>
            <p>Start your journey into the world of algorithms today!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;