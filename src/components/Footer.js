import React from 'react';


export default function Footer() {
    return (
        <div style={{background:'#1A1100',height:'300px'}}>
            <h1 style={{color:'white',marginLeft:'10%',paddingTop:'2%'}}>Ardumar</h1>
            <div className='row' style={{width:'80%',marginLeft:'10%',paddingTop:'15px'}}>
                <div className='col' style={{color:'white'}}>
                    <h6>About us</h6>
                    <h6>Our Article</h6>
                    <h6>Market</h6>
                    <h6>Our community</h6>
                </div>
                <div className='col' style={{color:'white'}}>
                    <h6>Follow us:</h6>
                    <div className='col'>
                        <div style={{backgroundColor:'white'}}></div>
                        <div style={{backgroundColor:'green'}}></div>
                        <div style={{backgroundColor:'orange'}}></div>
                    </div>
                    <h6>Subscribe</h6>
                        <div>Search text</div>
                </div>
                <div className='col' style={{color:'white'}}>
                    <h6>logo and Address</h6>
                    <h6>logo and 081-990-6782</h6>
                    <h6>logo vachirachat@outlook.com</h6>
                </div>
            </div>
            <p style={{color:'white',marginLeft:'10%',paddingTop:'40px'}}>COPYRIGHT@ARDUMAR by vachirachat</p>
        </div>
    );
    }