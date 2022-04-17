import React from "react";
import descripPic from "../../../images/description.jpg";
import "./Description.css";
const Description = () => {
  return (
    <div className="container">
      <h1 className="fw-bold pt-5 pb-2">Wellcome To Stay Strong</h1>
      <p>
        Stay Strong is where you can find balance, harmony and energy renewal
        amidst the hectic bustle of everyday pressures and deadlines.
      </p>
      <p>Relax & enjoy a personalized day yoga experienc of Fitness.</p>
      <div className="description">
        <div className="my-5">
          <div className="text-end">
            <h3>You Are Happier</h3>
            <p>
              People that did yoga for an hour have 27% higher happy brain
              chemical, GABA.
            </p>
          </div>
          <div className="text-end pt-3">
            <h3>Heart Benefits</h3>
            <p>
              Yoga can help lower blood pressure, cholesterrol, and blod sugar ,
              all of which are good.
            </p>
          </div>
          <div className="text-end pt-3">
            <h3>Better Body Image</h3>
            <p>
              Focusing inward during yoga helps you be more satisfied with your
              body and less critical if it.
            </p>
          </div>
        </div>
        <div>
          <img className="img-fluid" src={descripPic} alt="" />
        </div>
        <div className="my-5">
          <div className="text-start">
            <h3>You Sleep Better</h3>
            <p>
              45 minutes of yoga can help sleep an hour longer and fall asleep
              faster.
            </p>
          </div>
          <div className="text-start pt-3">
            <h3>Top To Toe Tonight</h3>
            <p>
              In some pose you’re lifting every pound of your body weight.
              That's why it is important to sleep.
            </p>
          </div>
          <div className="text-start pt-3">
            <h3>Better Libido</h3>
            <p>
              Yoga helps reduce anxiety, increase awareness, and speeds the
              release of hormones.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
