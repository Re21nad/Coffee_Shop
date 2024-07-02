import "../styles/Header.css";
import React from "react";

export default function Header(){
    return (
        <div className="container">
            <div className="header-1">
                <div className="nav">
                    <a href="#home">Home</a>
                    <a href="#about">About Us</a>
                    <a href="#services">Services</a>
                    <a href="#stores">Stores</a>
                    <a href="#contact">Contact Us</a>
                </div>
            </div>
            <div className="header-2">
                <div className="nav">
                    <i className="ri-search-2-line"></i>
                    <i className="ri-shopping-bag-3-line"></i>
                </div>
            </div>
        </div>
    );
}
