import React from "react";
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

const Test = () => {
  const schema = yup.object().shape({
    name: yup
      .string()
      .max(10, "name cannot be more than 10 characters")
      .required("name cannot be empty"),
    email: yup.string().email().required("email cannot be empty"),
    password: yup
      .string()
      .max(10, "Words should be 10 max")
      .min(5, "words should be 5 minimum")
      .required("password cannot be empty"),
  });

  const initialValues = { name: "", email: "", password: "" };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(data) => {
        console.log(data);
      }}
    >
      {({ isValid, dirty }) => (
        <Form>
          <div>
            <Field name="name" id="name" type="text" />
            <ErrorMessage name="name">{(msg) => msg}</ErrorMessage>
          </div>
          <div>
            <Field name="email" id="email" type="text" />
            <div>
              <ErrorMessage name="email">{(msg) => msg}</ErrorMessage>
            </div>
          </div>
          <div>
            <Field name="password" id="password" type="password" />
            <ErrorMessage name="password">{(msg) => msg}</ErrorMessage>
          </div>
          <button type="submit" disabled={!isValid}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default Test;
