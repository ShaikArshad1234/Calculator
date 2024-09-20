import React from 'react';
import './Display.css';

function Display({ input, result }) {
  return (
    <div className="display">
      <div>{input || '0'}</div>
      <div>{result}</div>
    </div>
  );
}

export default Display;
