import React from "react";
import "./Reset.css";
import { Link } from "react-router-dom";
import image from "./image/reset-img.jpg";

const Reset = () => {
  return (
    <div className="reset">
      <div>
        <img src={image} alt="reset-img" />
      </div>
      <div className="reset-main">
        <div className="reset-password-title">Reset Password</div>
        <form>
          <div>
            <label for="password" className="required">
              {" "}
              Password
            </label>
          </div>
          <div>
            <input type="text" id="password" name="password" required></input>
          </div>
          <div>
            <label for="password" className="required">
              {" "}
              Confirm Password
            </label>
          </div>
          <div>
            <input type="text" id="password" name="password" required></input>
          </div>
          <button>
            <Link to={"/main"} className="reset-link">
              Reset Password
            </Link>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Reset;
