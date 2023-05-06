import SignInImage from "../../icons/SignInImage";
import "./Signup.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "../../index.css";
import { useState } from "react";
import * as services from "../../Services/AuthService";
import toast from "react-hot-toast";

function Signup() {
  const navigate = useNavigate();
  const [showPassword, setshowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const register = async (data) => {
    const { email, name, password } = data;
    try {
      setLoading(true);
      let response = await services.registerUser(name, password, email);
      // console.log(response);
      toast.success(`${response?.message} Please sign in now`);
      navigate("/");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error(error?.response?.data?.message);
    }
  };

  function signinPage() {
    navigate("/");
  }

  const showMyPassword = () => {
    setshowPassword(!showPassword);
  };

  const schema = yup.object().shape({
    name: yup
      .string()
      .max(20, "name cannot be more than 10 characters")
      .required("name cannot be empty"),
    email: yup.string().email().required("Email cannot be empty"),
    password: yup
      .string()
      .max(10, "password should be 10 words max")
      .min(5, "password should be 5 words minimum")
      .required("password cannot be empty"),
  });

  const initialValues = { name: "", email: "", password: "" };

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

            <Formik
              initialValues={initialValues}
              validationSchema={schema}
              onSubmit={(data) => {
                register(data);
              }}
            >
              {({ isValid, dirty }) => (
                <Form className="login-form">
                  <div className="login-email">
                    <div>
                      <label htmlFor="fullname">Full name</label>
                      <Field
                        name="name"
                        id="name"
                        type="text"
                        className="login-email-input fullname"
                      />
                      <div className="error-message">
                        <ErrorMessage name="name">{(msg) => msg}</ErrorMessage>
                      </div>
                    </div>
                    <div className="login-email">
                      <label htmlFor="email">Email</label>
                      <Field
                        name="email"
                        id="email"
                        type="text"
                        className="login-email-input"
                      />
                      <div className="error-message">
                        <ErrorMessage name="email">{(msg) => msg}</ErrorMessage>
                      </div>
                    </div>

                    <div>
                      <div className="signup-password-forget">
                        <label for="password">Password</label>
                        <span className="login-forget-password">
                          <Link to="/forgetpassword" className="signup-link">
                            {" "}
                            Forget Password
                          </Link>
                        </span>
                      </div>
                      <Field
                        name="password"
                        id="password"
                        type={showPassword ? "text" : "password"}
                        className="login-email-input"
                      />

                      <div className="error-message">
                        <ErrorMessage name="password">
                          {(msg) => msg}
                        </ErrorMessage>
                      </div>
                    </div>

                    <div className="login-checkbox">
                      <input
                        type="checkbox"
                        id="checkbox"
                        className="login-checkbox-input"
                        onClick={showMyPassword}
                      />
                      <label for="checkbox" className="checkbox">
                        {" "}
                        {showPassword ? "Hide" : "Show Password"}
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={!isValid || loading}
                      className="login-button"
                    >
                      {loading ? "Please wait" : "Create your account"}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>

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
