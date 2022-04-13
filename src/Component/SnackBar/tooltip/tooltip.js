import React from "react";
import "./tooltip.style.css";

const Tooltip = ({ text, isVisibility, cardWidth, bottom }) => {
  let styleContainer = {
    visibility: isVisibility,
  };

  let styleContent = {
    bottom: bottom,
    width: cardWidth,
  };

  return (
    <div style={styleContainer} className="tooltip-container">
      <div className="tooltip-content">
        <p style={styleContent}>{text}</p>
      </div>
    </div>
  );
};

export default Tooltip;
