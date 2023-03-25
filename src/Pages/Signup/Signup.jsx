import SignIn from "../../Components/SignIn";
import SignInImage from "../../icons/SignInImage";
import "./Signup.css";

function Signup() {
  return (
    <div>
      <div className="navbar">
        <h3>Diary</h3>
        <div className="navbtn">
          <button className="signout login-signin">Sign in</button>
        </div>
      </div>
      <div className="signup-main">
        <div className="signup-img">
          <SignInImage />
        </div>
        <div className="signup-register">
          <SignIn />
        </div>
      </div>
    </div>
  );
}

export default Signup;
