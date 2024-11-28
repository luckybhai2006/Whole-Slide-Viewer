import React from "react";

const Footer = () => {
  const handleReport = () => {
    alert("Report generated!");
  };

  return (
    <footer>
      <button onClick={handleReport}>Report</button>
    </footer>
  );
};

export default Footer;