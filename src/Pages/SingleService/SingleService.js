import React from "react";
import { useNavigate } from "react-router-dom";

const SingleService = ({ service }) => {
  const { name, price, description, imageURL } = service;
  const navigate = useNavigate();
  const navigateCheckOut = () => {
    navigate("/checkout");
  };
  return (
    <div>
      <div className=" shadow-lg rounded-2 p-3">
        <img height={150} src={imageURL} alt="" />
        <h2 className="pt-3 fw-bold">{name}</h2>

        <h4 className="fw-bold pt-2">{price}</h4>
        <p className=" text-center pt-2">{description}</p>
        <button onClick={navigateCheckOut} className="btn btn-primary">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default SingleService;
