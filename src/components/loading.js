// src/components/Loading.js
import React from 'react';
import './Loading.css'; // Optional for styling

const Loading = () => {
  return (
    <div className="loading-container">
      <img src="/assets/spinner.gif" alt="Loading..." />
    </div>
  );
};

export default Loading;
