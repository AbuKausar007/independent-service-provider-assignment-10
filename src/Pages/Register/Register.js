import React, { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user, loading] =
    useCreateUserWithEmailAndPassword(auth);

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordBlur = (event) => {
    setConfirmPassword(event.target.value);
  };

  const hanldeCreateUser = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("Your password didn't match! Try again.");
      return;
    }
    if (password.length < 6) {
      setError("Password should be more than 6 characters.");
    }
    createUserWithEmailAndPassword(email, password);
  };

  if (loading) {
    return (
      <div>
        <h1
          style={{
            fontSize: "45px",
            fontWeight: "700",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "green",
          }}
        >
          Loading...
        </h1>
        ;
      </div>
    );
  }
  if (user) {
    navigate("/");
  }

  return (
    <div>
      <form
        onSubmit={hanldeCreateUser}
        className="container py-5 w-50 text-start"
      >
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label h4">
            Email address
          </label>
          <input
            onBlur={handleEmailBlur}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Your Email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label h4">
            Password
          </label>
          <input
            onBlur={handlePasswordBlur}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label h4">
            Confirm Password
          </label>
          <input
            onBlur={handleConfirmPasswordBlur}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Confirm Password"
          />
        </div>

        <p>
          Already have an account?{" "}
          <Link className="form-link" to="/login">
            Login
          </Link>
        </p>
        <p style={{ color: "red" }}>{error}</p>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
