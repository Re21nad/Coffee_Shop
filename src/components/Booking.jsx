import React from "react";

export default function Booking() {
  const main = {
    height: '70vh',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const container = {
    backgroundImage: 'url(https://img.freepik.com/free-photo/fresh-coffee-steams-wooden-table-close-up-generative-ai_188544-8923.jpg)', // Replace with your image URL
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '30px',
    padding: '60px 40px', // Adjusted padding to give space for the text to align properly
    paddingRight: '360px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  };

  const textContainer = {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    textAlign: 'left',
    color: 'white', // Ensure text color contrasts well with the background image
    width: '100%', // Ensures the container spans the full width
  };

  const buttonStyle = {
    marginTop: '20px',
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
          <p style={{
            fontSize: '35px',
            fontWeight: '700',
          }}>Request an order for your private party or event?</p>
          <p style={{
            fontSize: '22px',
          }}>We are open to ordering party events such as weddings, celebrating, or other events.</p>
        </div>
        <button style={buttonStyle}>Booking Now</button>
      </div>
    </div>
  );
}
