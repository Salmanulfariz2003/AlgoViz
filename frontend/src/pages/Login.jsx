import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";
import loginImage from "../assets/backgroung.jpg";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/api/auth/login", {
                email,
                password,
            });
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("email", email); // Store the email
            window.dispatchEvent(new Event("storage"));
            alert("Login Successful!");
            navigate("/");
        } catch (err) {
            console.error(err.response ? err.response.data : "An error occurred during login");
            alert("Invalid Credentials");
        }
    };

    return (
        <div className="login-page-container">
            <div className="login-form-container">
                <div className="login-image-section" style={{ backgroundImage: `url(${loginImage})` }}>
                    <div className="overlay">
                        <h1>Welcome Back!</h1>
                        <p>Log in to continue your journey of learning algorithms.</p>
                    </div>
                </div>
                <div className="login-form-section">
                    <form className="login-form" onSubmit={handleSubmit}>
                        <h2>Login</h2>
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
                        <button type="submit" className="login-button">Login</button>
                        <p className="register-link">
                            Don't have an account? <Link to="/register">Register</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;