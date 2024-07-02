import React from "react";
export default function OurStory() {
    const main = {
      display: 'flex',
      padding: '20px',
      width: '100vw',
      height: '40vh', // Make the container height 100% of the viewport height
      justifyContent: 'center',
    //   alignItems: 'center',
    };
  
    const textContainer = {
      margin: '0 10px', 
      color: 'white',
      fontSize: '20px',
      fontFamily: 'Time',
    };

    const iconContainer = {
        color: 'white',
        textAlign: 'center',
        fontSize: '100px',
        paddingRight: '30px',
    };
  
    return (
      <div style={main}>
        <div style={{
            position:'absolute',
            display: 'flex',
            flexDirection: 'row',
            backgroundColor: 'black',
            padding: '30px 75px',
            border: 'none',
            borderRadius: '30px',
            alignItems: 'center',
        }}>
            <div>
                <i style={iconContainer} class="ri-drinks-line"></i>
            </div>
            <div style={textContainer}>
                <p>
                    In our coffee shop, we take immense pride in crafting each cup of coffee with passion and precision.<br></br>
                    Our skilled baristas curate a diverse selection of specialty coffees sourced from the finest beans <br></br>
                    across the globe, ensuring every sip transports you to a world of unparalleled taste and bliss.
                </p>
            </div>
        </div>
      </div>
    );
  }
  