import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignIn } from "@fortawesome/free-solid-svg-icons";
import auth from "../../firebase.init";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handleSignIn = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

  const resetPassword = async () => {
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Sent email.");
    } else {
      toast("Please enter your email address.");
    }
  };

  const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);

  let errorElement;
  if (error || error1) {
    errorElement = (
      <div>
        <p className="text-danger">
          {" "}
          {error?.message} {error1?.message}
        </p>
      </div>
    );
  }

  if (loading || loading1) {
    return (
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
    );
  }

  if (user || user1) {
    navigate(from, { replace: true });
  }

  return (
    <div>
      <form onSubmit={handleSignIn} className="container py-5 w-50 text-start">
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
            required
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
            required
          />
        </div>

        <p>
          New to Stay Strong?
          <Link to="/register" className="text-decoration-none fw-bold">
            {" "}
            Create an account.
          </Link>
        </p>
        <p>
          Forget Password?
          <button
            className=" btn btn-link text-decoration-none text-danger fw-bold"
            onClick={resetPassword}
          >
            {" "}
            Reset Password.
          </button>
        </p>

        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
      <ToastContainer />
      <p>{errorElement}</p>
      <div className="d-flex align-items-center justify-content-center w-50 mx-auto">
        <div style={{ height: "1px" }} className="bg-dark w-25"></div>
        <h5>OR</h5>
        <div style={{ height: "1px" }} className="bg-dark w-25"></div>
      </div>

      <button
        onClick={() => signInWithGoogle()}
        className="btn btn-primary"
        style={{ marginBottom: "25px", marginTop: "10px" }}
      >
        <FontAwesomeIcon icon={faSignIn}></FontAwesomeIcon> Continue With Google
      </button>
    </div>
  );
};

export default Login;
