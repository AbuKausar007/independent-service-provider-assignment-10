import React from "react";

const NotFound = () => {
  return (
    <div className="py-5 m-5 d-flex flex-column justify-content-center align-items-center">
      <h1 className="text-danger fw-bold">Sorry! Page not found.</h1>
      <h2 className="text-danger fw-bold">
        You are trying to access non existing page.
      </h2>
    </div>
  );
};

export default NotFound;
