import React from "react";

export default function Newsletter() {
  const main = {
    width: '100%',
    height: '40vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
  };

  const container = {
    backgroundColor: 'black',
    width: '70%',
    padding: '30px 40px',
    border: 'none',
    borderRadius: '30px',
    textAlign: 'center',
    position: 'relative',
  };

  const textContainer = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    color: 'white',
    marginBottom: '20px',
  };

  const inputStyle = {
    padding: '10px 15px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    marginRight: '10px',
    width: '250px',
  };

  const buttonStyle = {
    padding: '10px 20px',
    borderRadius: '5px',
    backgroundColor: '#ff9900',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  };

  return (
    <div style={main}>
      <div style={container}>
        <div style={textContainer}>
          <h1>Newsletter</h1>
          <p>Subscribe and get 20% off your first purchase</p>
        </div>
        <div>
          <input style={inputStyle} placeholder="Your email" />
          <button style={buttonStyle}>Subscribe</button>
        </div>
      </div>
    </div>
  );
}
