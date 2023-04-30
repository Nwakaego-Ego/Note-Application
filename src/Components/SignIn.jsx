import React, { useState } from "react";
import "../index.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Test from "../Pages/Test";

function SignIn() {
  const navigate = useNavigate();
  const [reveal, setReveal] = useState(false);

  const showPw = () => {
    setReveal(!reveal);
  };

  return (
    <div className="login-form-section">
      <div className="login-sign-in">Sign in</div>
      <p className="login-question">
        Login with your email address or password
      </p>
      <Test />
      <p className="login-account">
        Dont have any account ?{" "}
        <span className="login-sign-up">
          <Link to="/signup" className="signup-link">
            Sign up
          </Link>
        </span>{" "}
      </p>
    </div>
  );
}

export default SignIn;
