import React from "react";
import "./tag.css";

const Tag = ({ title, bgColor ,fontColor}) => {
  const style = {
    backgroundColor: bgColor,
    color: fontColor
  };
  return (
    <div style={style} className="tag-container">
      <h6>{title}</h6>
    </div>
  );
};

export default Tag;
