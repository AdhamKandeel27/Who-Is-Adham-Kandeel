import React from "react";
import "./imageWithLabel.css";

const ImageAndLabel = ({ imgSrc, imgLabel }) => {
  return (
    <div className="image-label-container">
      <div className="image-container">
        <img src={imgSrc} alt={imgLabel} />
      </div>
      <div className="label-container">
        <h3>{imgLabel}</h3>
      </div>
    </div>
  );
};

export default ImageAndLabel;
