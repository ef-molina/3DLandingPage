import React from 'react';

const Html = () => {
  return (
    <div
      style={{
        fontFamily: 'sans-serif',
        fontSize: 'min(10vw, 86px)',
        lineHeight: 0.75,
      }}
    >
      <h1
        style={{
          position: 'absolute',
          top: '50vh',
          left: '50vw',
          transform: 'translateX(-50%)',
          //   color: '#292828',
          margin: 0,
        }}
      >
        hello.
      </h1>
      <h1
        style={{
          position: 'absolute',
          top: '150vh',
          left: '50vw',
          transform: 'translateX(-65%)',
          //   color: '#292828',
          margin: 0,
        }}
      >
        Your Future
      </h1>
      <h1
        style={{
          position: 'absolute',
          top: '250vh',
          left: '50vw',
          transform: 'translateX(-60%)',
          //   color: '#292828',
          margin: 0,
        }}
      >
        Awaits
      </h1>
    </div>
  );
};

export default Html;
