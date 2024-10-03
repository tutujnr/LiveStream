import React from 'react';

const OverlayControls = ({ addOverlay }) => {
  return (
    <div>
      <button onClick={addOverlay}>Add Overlay</button>
    </div>
  );
};

export default OverlayControls;
