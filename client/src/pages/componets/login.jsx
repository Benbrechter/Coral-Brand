import React, { useState } from "react";
import Navbar from "./navbar";
import Auth from '../../utils/auth';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const endpoint = isLogin ? "/api/login" : "/api/signup";
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      const data = await response.json();
      console.log('Full response:', data); 
      if (!response.ok) {
        throw new Error(data.message || "An error occurred during submission");
      }

      // Handle successful login/signup
      Auth.login(data.token);
      
    } catch (error) {
      console.error("Submission error:", error);
      setError(error.message || "An error occurred. Please try again.");
      setLoading(false);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleToggle = () => {
    setIsLogin(!isLogin);
    setFormState({ username: "", email: "", password: "" });
    setError("");
  };

  return (
    <div>
      <Navbar/>
      <div className="form-container">
        
      <div className="form">
        <h1>{isLogin ? "Login" : "Sign Up"}</h1>

        {error && <div style={{color: 'red'}}>{error}</div>}

        <form onSubmit={handleSubmit} className="login-submit">
          {!isLogin && (
            <div>
              <label>
                Username
                <input
                  type="text"
                  name="username"
                  value={formState.username}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
          )}

          <div>
            <label>
              Email
              <input
                type="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          <div>
            <label>
              Password
              <input
                type="password"
                name="password"
                value={formState.password}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          <button type="submit" disabled={loading}>
            {loading ? "Processing..." : isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <button onClick={handleToggle}>
          {isLogin
            ? "Need an account? Sign up"
            : "Already have an account? Login"}
        </button>
      </div>
    </div>
    </div>
    
  );
};

export default Login;
