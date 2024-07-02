import React, { useState } from 'react';
import Header from '../components/Header';
import OurStory from '../components/OurStory';
import OurProducts from '../components/OurProducts';
import Booking from '../components/Booking';
import OurCustomers from '../components/OurCustomers';


function HomePage() {
  const headerStyle = {
    backgroundImage: 'url(https://img.freepik.com/free-photo/fresh-coffee-steams-wooden-table-close-up-generative-ai_188544-8923.jpg)', // Replace with your image URL
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '100vh',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'start',
  };

  // eslint-disable-next-line no-undef
  const [isHovered, setIsHovered] = useState(false);

  const order = {
    position: 'absolute',
    backgroundColor: isHovered ? '#ff4500' : '#ff6347', 
    borderRadius: '50px',
    width: '15%',
    padding: '15px 0',
    fontSize: '18px',
    fontWeight: '700',
    top: '70%',
    left: '18%',
    color: 'white',
    textAlign: 'center',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  return (
    <div>
        <Header />
        <header style={headerStyle}>
            <h1 style={{
                marginLeft: '150px',
                fontSize: '350%',}}>
                    LIFE IS NOT BETTER
            </h1>
            <h3 style={{
                fontSize: '240%',
                fontWeight: '500',
                position: 'absolute',
                bottom: '32%',
                left:'13%',
                }}>
                    WITHOUT COFFEE
            </h3>

            <button 
                style={order}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>Order Now</button>
        </header>
        <OurStory />
        <OurProducts />
        <Booking />
        <OurCustomers />
      
    </div>
  );
}

export default HomePage;
