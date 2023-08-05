// src/pages/Home.js

import React from "react";
import "./IntroductionandBranding.css";
import Carousel from "react-material-ui-carousel";
import image1 from "../../../assets/images/image1.jpg";
import image2 from "../../../assets/images/Image2.jpg";
const IntroductionandBranding = () => {
  return (
    <div>
      <div className="carousel-container">
        {/* <Carousel
          animation="fade"
          duration={100}
          swipe={true}
          navButtonsAlwaysVisible={false}
        >
          <div>
            <img src={image1} />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img src={image2} />
            <p className="legend">Legend 2</p>
          </div>
        </Carousel> */}
      </div>

      {/* Add content for your home page */}
    </div>
  );
};

export default IntroductionandBranding;
