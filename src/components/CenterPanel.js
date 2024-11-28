import React, { useState, useRef } from 'react';

const CenterPanel = () => {
  const [scale, setScale] = useState(1); // Initial zoom scale
  const [position, setPosition] = useState({ x: 0, y: 0 }); // Initial position for panning
  const [isDragging, setIsDragging] = useState(false); // Flag to track dragging state
  const viewerRef = useRef(null); // Reference to the viewer container

  // Handle Zoom In
  const zoomIn = () => {
    setScale((prevScale) => Math.min(prevScale * 1.2, 3)); // Max scale is 3
  };

  // Handle Zoom Out
  const zoomOut = () => {
    setScale((prevScale) => Math.max(prevScale / 1.2, 1)); // Min scale is 1
  };

  // Mouse Drag Handling for Panning
  const handleMouseDown = (e) => {
    setIsDragging(true);
    const startX = e.clientX - position.x;
    const startY = e.clientY - position.y;

    const handleMouseMove = (e) => {
      if (isDragging) {
        setPosition({
          x: e.clientX - startX,
          y: e.clientY - startY,
        });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  // Handle Mouse Leave (in case the mouse goes out of the viewer area)
  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  return (
    <div className="panel-content">
      <h3>WSI Zoomed In View</h3>
      <div
        className="viewer"
        ref={viewerRef}
        style={{
          width: '70%', // Width of the viewer container
          backgroundColor: 'smook',
          height: '400px', // Height of the viewer container
          overflow: 'hidden', // Prevent image overflow
          position: 'relative',
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.4), 0 4px 12px rgba(0, 0, 0, 0.25)',
  padding: '20px',
  transition: 'box-shadow 0.3s ease',
          cursor: isDragging ? 'grabbing' : 'grab', // Change cursor during drag
        }}
      >
        <img
          src="https://t3.ftcdn.net/jpg/04/97/66/28/360_F_497662812_7rGW6PMBJR9AbrKcGgN5S1luXYTjH92i.jpg"
          alt="Whole Slide Image"
          style={{
            transform: `scale(${scale}) translate(${position.x}px, ${position.y}px)`,
            transformOrigin: 'center center',
            transition: 'transform 0.3s ease', // Smooth transition for zooming
            width: '100%',
            height: '100%',
            objectFit: 'contain', 
            maxWidth: '100%',
            maxHeight: '100%',
          }}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
        />
      </div>
      <div className="zoom-controls">
        <button onClick={zoomIn}>Zoom In</button>
        <button onClick={zoomOut}>Zoom Out</button>
      </div>
    </div >
  );
};

export default CenterPanel;
