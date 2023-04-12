import React from "react";
import * as yup from "yup";

const handleChange = (event) => {
  event.preventDefault();
  let formScheme = {
    name: event.target[0].value,
    email: event.target[0].value,
    password: event.target[0].value,
  };
  const valid = schema.valid(formScheme);
  console.log(valid);
};

const Test = () => {
  const schema = yup.object().shape({
    name: yup.string().required,
    email: yup.string().email().required,
    password: yup.string().required,
  });
  return (
    <form onSubmit={handleChange}>
      <input type="name" name="name" id="name" placeholder="name" />
      <input type="email" name="email" id="email" placeholder="email" />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="password"
      />
      <input type="submit" />
    </form>
  );
};

export default Test;
