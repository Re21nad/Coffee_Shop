import React from "react";
export default function Products(){
    const container = {
        width: '20%',
        border: 'none',
        borderRadius: '30px',
        padding:' 30px',

    };

    const imageContainer = {
        backgroundColor: 'lightgray',
        padding: '50px 20px',
        // margin: '0 30px',
        borderRadius:'30px'
    };

    const textContainer ={
        display: 'flex',
        padding: '15px 25px',
    };

    return(
        <div style={container}>
            <div style={imageContainer}>
                <i style={{
                    fontSize:'120px',
                    }}
                class="ri-drinks-line"></i>
            </div>
            <div style={textContainer}>
                <div>
                    <p style={{
                        fontWeight: '700',
                        fontSize: '17px',
                    }}>Espresso Ice Coffee</p>
                    <p>Category: Ice Coffee</p>
                </div>
                <div style={{
                    justifyContents: 'center',
                    alignItems: 'center',
                }}>
                    <p style={{
                        marginLeft: '27px',
                        // marginTop: '37px',
                        padding: '10px',
                        border: '1px solid black',
                        borderRadius: '20px',
                        fontSize:'10px',
                        fontWeight: '700',
                }}>
                    26.00 SAR</p>
                </div>
            </div>
        </div>
    );
}