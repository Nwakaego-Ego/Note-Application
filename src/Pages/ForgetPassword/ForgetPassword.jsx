import { useNavigate } from "react-router";
import "./ForgetPassword.css";
import ForgetPw from "../../icons/ForgetPw";
import { Link } from "react-router-dom";

const ForgetPassword = () => {
  const navigate = useNavigate();

  const signinPage = () => {
    navigate("/");
  };

  return (
    <div>
      <div className="navbar">
        <h3>Diary</h3>
        <div className="navbtn">
          <button className="signout forgetpw-signin" onClick={signinPage}>
            Sign in
          </button>
        </div>
      </div>
      <div className="forgetpw-main">
        <div className="forgetpw-img">
          <ForgetPw />
        </div>
        <div className="forgetpw-login">
          <div className="login-form-section">
            <div className="login-sign-in">Forget Password</div>
            <p className="login-question">
              Dont worry, weve got you covered, enter the email address
              associated with this account
            </p>
            <form className="login-form forgetpw-login-form">
              <div className="login-email">
                <div className="login-email-label">
                  <label for="email">Email address</label>
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="login-email-input forgerpw-login-email-input"
                  placeholder="name@example.com"
                ></input>
              </div>
            </form>
            <div className="div-login-btn">
              <button className="login-button">
                <Link to={"/reset"} className="reset">
                  Submit
                </Link>
              </button>
            </div>
            <p className="login-account">
              Go back to sign up{" "}
              <span className="login-sign-up">
                <Link to="/signup" className="signup-link">
                  Sign up
                </Link>
              </span>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
