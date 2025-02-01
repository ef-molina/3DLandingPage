import React from 'react';

const Html = () => {
  //
  const baseStyle = {
    position: 'absolute',
    left: '50vw',
    margin: 0,
  };

  return (
    <div
      style={{
        fontSize: 'min(10vw, 86px)',
        lineHeight: 0.75,
      }}>
      <h1 style={{ ...baseStyle, top: '50vh', transform: 'translateX(-50%)' }}>Hello</h1>
      <h1 style={{ ...baseStyle, top: '150vh', transform: 'translateX(-65%)' }}>Your Future</h1>
      <h1 style={{ ...baseStyle, top: '250vh', transform: 'translateX(-60%)' }}> Awaits </h1>
    </div>
  );
};

export default Html;
