import React from "react";
import News from "./News";

export default function OurNews(){

    const main = {
        width: '100%',
        height: '60vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContents: 'flex-start',
        alignItems: 'flex-start',
    };
    return(
        <div style={main}>
            <h1 style={{
                marginLeft: '80px',
            }}>Our Latest News</h1>
            <News />   
        </div>
    );
}