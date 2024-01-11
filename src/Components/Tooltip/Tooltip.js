import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import "./Tooltip.css";

const Tooltip = ({ content, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const tooltipRef = useRef(null);

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (tooltipRef.current && !tooltipRef.current.contains(event.target)) {
        setIsVisible(false);
      }
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return (
    <div
      className="tooltip-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {isVisible && (
        <div className="tooltip" ref={tooltipRef}>
          {content}
        </div>
      )}
    </div>
  );
};

Tooltip.propTypes = {
  content: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Tooltip;
