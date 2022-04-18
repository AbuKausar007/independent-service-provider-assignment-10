import React from "react";
import { Link, useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { key } = useParams();

  return (
    <div>
      <h1 className="py-5">This is servie details about {key} </h1>
      <div className="text-center">
        <Link to="/checkout">
          <button className="btn btn-primary"> Proceed CheckOut</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetails;
