import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../../../images/banner/rsz_banner1.png";
import banner2 from "../../../images/banner/rsz_1banner2.png";
import banner3 from "../../../images/banner/rsz_banner3.png";

const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img className="d-block w-100" src={banner1} alt="First slide" />
          <Carousel.Caption>
            <h1 className="fw-bold">Hi! I'm Arvy.</h1>
            <h1 className="fw-bold">
              Your New Personal Coach For Better Life.
            </h1>
            <h2 className="fw-bold">Stay Strong</h2>
            <h2>Keep Training Every Single Day.</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner2} alt="Second slide" />

          <Carousel.Caption>
            <h1 className="fw-bold">Hi! I'm Arvy.</h1>
            <h1 className="fw-bold">
              Your New Personal Coach For Better Life.
            </h1>
            <h1 className="fw-bold">Stay Fit</h1>
            <h2>Just Start From Today To Gain.</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner3} alt="Third slide" />

          <Carousel.Caption>
            <h1 className="fw-bold">Hi! I'm Arvy.</h1>
            <h1 className="fw-bold">
              Your New Personal Coach For Better Life.
            </h1>
            <h1 className="fw-bold">Stay Healthy</h1>
            <h2> Eat Healty Food and Be Conscious.</h2>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
