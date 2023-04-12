import SignInImage from "../../icons/SignInImage";
import "./Signup.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  function loginBtn() {
    navigate("/main");
  }

  function signinPage() {
    navigate("/");
  }

  return (
    <div>
      <div className="navbar">
        <h3>Diary</h3>
        <div className="navbtn">
          <button className="signout login-signin" onClick={signinPage}>
            <Link to="/" className="login-link">
              {" "}
              Sign in
            </Link>
          </button>
        </div>
      </div>
      <div className="signup-main">
        <div className="signup-img">
          <SignInImage />
        </div>
        <div className="signup-register">
          <div className="login-form-section signup-form-section">
            <div className="login-sign-in">Register</div>
            <p className="login-question">
              Create an account to start using diary
            </p>
            <form className="login-form">
              <div className="login-email">
                <div className="login-email-label">
                  <label for="fullname">Full name</label>
                </div>
                <textarea
                  type="email"
                  id="fullname"
                  name="email"
                  className="login-email-input"
                ></textarea>
              </div>
              <div className="login-email">
                <div className="login-email-label">
                  <label for="email">
                    Email <address></address>
                  </label>
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
                    <span className="login-forget-password">
                      <Link to="/forgetpassword" className="signup-link">
                        {" "}
                        Forget Password
                      </Link>
                    </span>
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
              <Link to="/main" className="login-link">
                {" "}
                Create your account
              </Link>
            </button>
            <p className="login-account">
              Already own an account ?{" "}
              <span className="login-sign-up">
                <Link to="/" className="signup-link">
                  Sign in
                </Link>
              </span>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
