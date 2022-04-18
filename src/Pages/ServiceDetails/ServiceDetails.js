import React from "react";
import { useParams } from "react-router-dom";
import checkImg from "../../images/checkout.jpg";

const ServiceDetails = () => {
  const { key } = useParams();

  return (
    <div className="container">
      <h1 className="py-5 fw-bold ">This is Checkout about package {key} </h1>

      <div className="text-center d-flex justify-content-evenly">
        <img src={checkImg} width="400" alt="" />
        <h2 className="fw-bold d-flex justify-content-center align-items-center">
          {" "}
          Thanks for booking! See you soon.
        </h2>
      </div>
    </div>
  );
};

export default ServiceDetails;
