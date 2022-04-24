import { ErrorSharp } from "@material-ui/icons";
import React from "react";
import useForm from "./useForm";
import validate from "./validateInfo";
import "./SignUp.css";

const SignUp = ({ SubmitForm }) => {
  const { handleChange, values, handleSubmit, errors } = useForm(
    SubmitForm,
    validate
  );

  return (
    <div>
      <div className="form-content-right">
        <form className="form" onSubmit={handleSubmit}>
          <h1>Create your own account by filling the information below</h1>
          <div className="form-inputs">
            <label htmlFor="first name" className="form-label">
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              name="firstName"
              className="form-input"
              placeholder="Enter your first name "
              value={values.firstName}
              onChange={handleChange}
            />
            {errors.firstName && <p>{errors.firstName}</p>}
          </div>
          <div className="form-inputs">
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <input
              id="last name"
              type="text"
              name="lastName"
              className="form-input"
              placeholder="Enter your last name "
              value={values.lastName}
              onChange={handleChange}
            />
            {errors.lastName && <p>{errors.lastName}</p>}
          </div>
          <div className="form-inputs">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="form-input"
              placeholder="Enter your email "
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p>{errors.email}</p>}
          </div>
          <div className="form-inputs">
            <label htmlFor="Phone number" className="form-label">
              Phone number
            </label>
            <input
              id="phoneNumber"
              type="number"
              name="phoneNumber"
              className="form-input"
              placeholder="Enter your number"
              value={values.phoneNumber}
              onChange={handleChange}
            />
            {errors.phoneNumber && <p>{errors.phoneNumber}</p>}
          </div>
          <div className="form-inputs">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              className="form-input"
              placeholder="Enter your password "
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <p>{errors.password}</p>}
          </div>
          <div className="form-inputs">
            <label htmlFor="password2" className="form-label">
              Confirm Password
            </label>
            <input
              id="password2"
              type="password"
              name="password2"
              className="form-input"
              placeholder="Enter your password "
              value={values.password2}
              onChange={handleChange}
            />
            {errors.password2 && <p>{errors.password2}</p>}
          </div>
          <button className="form-input-btn" type="Submit">
            SignUp
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
