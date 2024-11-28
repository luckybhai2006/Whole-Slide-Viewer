import React, { useState, useEffect } from "react";

const Header = () => {
  const [timestamp, setTimestamp] = useState(new Date().toString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimestamp(new Date().toString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header>
      <h1>Whole Slide Image Viewer</h1>
      <div>{timestamp}</div>
    </header>
  );
};

export default Header;