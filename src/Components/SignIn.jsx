import "../index.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();

  function loginBtn() {
    navigate("/main");
  }
  return (
    <div className="login-form-section">
      <div className="login-sign-in">Sign in</div>
      <p className="login-question">
        Login with your email address or password
      </p>
      <form className="login-form">
        <div className="login-email">
          <div className="login-email-label">
            <label for="email">Email address</label>
          </div>
          <textarea
            type="email"
            id="email"
            name="email"
            className="login-email-input"
          ></textarea>
        </div>
        <div className="login-password">
          <div className="password">
            <div className="login-password-label">
              <label for="password">Password</label>
            </div>
            <div className="login-password-password">
              <span className="login-forget-password">Forget Password</span>
            </div>
          </div>
          <input
            type="password"
            id="password"
            className="login-password-input"
          ></input>
          <div className="login-checkbox">
            <input
              type="checkbox"
              id="checkbox"
              className="login-checkbox-input"
            />
            <label for="checkbox" className="checkbox">
              {" "}
              Show Password
            </label>
          </div>
        </div>
      </form>
      <button className="login-button" onClick={loginBtn}>
        <Link to="/main"> Login into your account</Link>
      </button>
      <p className="login-account">
        Dont have any account ? <span className="login-sign-up">Sign up</span>{" "}
      </p>
    </div>
  );
}

export default SignIn;
