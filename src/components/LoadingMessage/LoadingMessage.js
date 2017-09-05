import React from 'react';
import SidebarNav from '../SidebarNav/';

function LoadingMessage() {
  return (
    <div className="dashboard__body">
      <SidebarNav />
      <div className="details">
        <div className="grid">
          <div className="grid__item medium--two-fifths">
            <div>Loading ...</div>
          </div>
          <div className="grid__item medium--three-fifths" />
        </div>
      </div>
    </div>
  );
}

export default LoadingMessage;
