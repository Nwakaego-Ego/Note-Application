import { useState } from "react";
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import "../index.css";
import * as services from "../Services/AuthService";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Test = () => {
  const navigate = useNavigate();
  const [showPassword, setshowPassword] = useState(false);

  const showMyPassword = () => {
    setshowPassword(!showPassword);
  };

  const login = async (data) => {
    const { email, password } = data;
    try {
      let response = await services.loginUser(email, password);
      toast.success(response?.message);
      navigate("/main");
      localStorage.setItem(`user`, JSON.stringify(response?.user));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const schema = yup.object().shape({
    email: yup.string().required("email cannot be empty").email(),
    password: yup
      .string()
      .max(10, "Words should be 10 max")
      .min(5, "words should be 5 minimum")
      .required("password cannot be empty"),
  });

  const initialValues = { email: "", password: "" };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(data) => {
        login(data);
      }}
    >
      {({ isValid, dirty }) => (
        <Form>
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
            className="login-email-input "
          />
          <div className="error-message">
            <ErrorMessage name="password">{(msg) => msg}</ErrorMessage>
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

            <button className="login-button" type="submit" disabled={!isValid}>
              Login into your account
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Test;
