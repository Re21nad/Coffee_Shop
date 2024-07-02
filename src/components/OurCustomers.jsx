import React from "react";
import Customers from "./Customers";

export default function OurCustomers(){

    const main = {
        display: 'flex',
        flexDirection: 'column',
        justifyContents: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh',

    };
    
    return(
        <div style={main}>
            <h1>See what others</h1>
            <h1 style={{
                color: 'orange',
                position: 'absolute',
                bottom: '-215%'
            }}>are saying.</h1>
            <div style={{
                display: 'flex',
            }}>
                <Customers />
                <Customers />
                <Customers />
            </div>
            
        </div>
    );
}