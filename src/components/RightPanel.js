import React from 'react';

const RightPanel = ({ zoomLevel, imagePosition }) => {
  // Ensure imagePosition is always valid
  const top = imagePosition?.top || 0;  // Default to 0 if undefined
  const left = imagePosition?.left || 0;  // Default to 0 if undefined

  return (
    <div className="panel-content">
      <h3>WSI Zoomed-out View</h3>
      <div className="hub-view">
        <div className="zoomed-out">
          <h4>Zoomed-out View</h4>
          <p>Shows the whole slide image with a pointer indicating the zoomed-in area</p>
          
          {/* Zoomed-out Image */}
          <div className="zoomed-out-image">
            <img 
              src="https://t3.ftcdn.net/jpg/04/97/66/28/360_F_497662812_7rGW6PMBJR9AbrKcGgN5S1luXYTjH92i.jpg" 
              alt="Zoomed Out View"
              className="zoomed-out-img" 
              style={{
                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.4), 0 4px 12px rgba(0, 0, 0, 0.55)',
  
  transition: 'box-shadow 0.3s ease',
              }}
            />
            {/* Add a pointer indicating the zoomed-in area */}
            <div 
              className="pointer" 
              style={{
                top: `${top / zoomLevel}%`, 
                left: `${left / zoomLevel}%`,
                width: `${100 / zoomLevel}%`,
                height: `${100 / zoomLevel}%`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightPanel;
