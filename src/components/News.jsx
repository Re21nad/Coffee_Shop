import React from "react";

export default function News(){
    
    const imgContainer = {
        backgroundImage: 'url(https://img.freepik.com/free-photo/fresh-coffee-steams-wooden-table-close-up-generative-ai_188544-8923.jpg)', // Replace with your image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        borderRadius: '30px',
    };

    const btn = {
        border: '1px solid black',
        backgroundColor: 'white',
        padding: '10px 20px',
        borderRadius: '30px',
        display: 'flex',
        marginLeft: '25px',
    };
    return (
        <div style={{
            display: 'flex',
            margin: '10px 30px',
            fontFamily: 'Times',
        }}>
            <div style={imgContainer}>

            </div>
            <div>
                <div style={{
                    marginLeft: '20px',
                }}>
                    <p style={{
                        fontSize: '20px',
                        fontWeight: '700',
                    }}>Indonessian Coffee Experts Reach IDR 16.44 Trillion</p>
                    <div style={{
                        display:'flex',
                        justifyContent: 'center'
                    }}>
                        <p>Swara.com</p>
                        <p>18 Jul 2024</p>
                    </div>
                </div>
                <button style={btn}>Read More</button>
            </div>
        </div>
    );
}