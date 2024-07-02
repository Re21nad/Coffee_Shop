import React, { useState } from "react";
import Products from "./Products";

export default function OurProducts(){
 
    const main = {
        height: '80vh',
        width: '100%',
    };

    const textMain = {
        display: 'flex',
        marginLeft: '100px',
    };

    const [isHovered, setIsHovered] = useState(false);

    const buttonSty = {
        backgroundColor: isHovered ? '#ff4500' : 'black', 
        borderRadius: '30px',
        width: '10%',
        padding: '15px 0',
        fontSize: '18px',
        fontWeight: '500',
        color: 'white',
        textAlign: 'center',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        border: 'none',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',

    };

    return(
        <div style={main}>
            <h1 style={textMain}>Our Products </h1>
            <div>
            <div class="swiper mySwiper">       
                    <div class="swiper-wrapper">
                        <div class="swiper-slide"><Products /></div>
                        <div class="swiper-slide"><Products /></div>
                        <div class="swiper-slide"><Products /></div>
                        <div class="swiper-slide"><Products /></div>
                    </div>
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-pagination"></div>
                </div>
            </div>
            <button 
                style={buttonSty}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>View All</button>
            
        </div> 

    );
} 