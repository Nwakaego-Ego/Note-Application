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
            <div class="lg:inline-block lg:mr-4">
              <label for="email" class="block mb-2 lg:mb-0">
                Email
              </label>
            </div>

            <Field
              name="email"
              id="email"
              type="text"
              class="lg:w-full w-80 h-12 bg-[#ececec] rounded-lg pl-4 border border-transparent mt-5 mb-5"
            />

            <div className="error-message">
              <ErrorMessage name="email">{(msg) => msg}</ErrorMessage>
            </div>
          </div>
          <div className="flex lg:justify-between ">
            <label for="password">Password</label>
            <span className="flex justify-between">
              <Link to="/forgetpassword" className="signup-link ml-24 lg:ml-1">
                {" "}
                Forget Password
              </Link>
            </span>
          </div>
          <Field
            name="password"
            id="password"
            type={showPassword ? "text" : "password"}
            class="lg:w-full w-80 h-12 bg-[#ececec] rounded-lg pl-4 border border-transparent mt-5 mb-5"
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
            <div class=" lg:mr-4">
              <button
                type="submit"
                disabled={!isValid}
                class="lg:w-full w-80  h-12 bg-teal-500 rounded-lg font-normal text-base leading-5 text-white border border-transparent"
              >
                Login into your account
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Test;
