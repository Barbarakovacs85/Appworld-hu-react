import React from 'react';

function Display({ total }) {
  return (
    <input type="text" value={total} readOnly />
  );
}

export default Display;