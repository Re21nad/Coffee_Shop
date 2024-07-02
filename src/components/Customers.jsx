import React from "react";

export default function Customers(){

    const container = {
        marginTop: '45px',
        padding: '90px 20px',
        border: '2px solid black',
        borderRadius: '30px',
        width: '20%',
        margin: '40px 30px',
    };

    return (
        <div style={container}>
                <p style={{
                    fontSize: '32px',
                    fontFamily: 'times',
                }}>
                    "We highly recommend ordering from this coffee shop."
                </p>
                <div style={{
                    display: 'flex',
                }}>
                    <div style={{
                        padding:'37px',
                        backgroundColor: 'green',
                        borderRadius: '50px',
                        height: '3%',
                        margin: '10px 20px',
                    }}>

                    </div>
                    <div>
                        <p style={{
                            fontSize: '20px',
                            fontWeight: '700',
                        }}>Khaled Mohammed</p>
                        <p>Manager at Tahakom</p>
                    </div>
                </div>
            </div>
    );
}