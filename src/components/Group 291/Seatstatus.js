import React from "react";
import "./Seatstatus.css"
import redBox from '../../images/redBox.png'

export default function(){
    return(
        <div className="body-main">
            <div id='body-main-container'>
                {/* Main header of the Seatstatus component*/}
                
                    <h4 id='seat-stat'>Seat stats</h4>
                    <span id="drop-btn">
                        <span className="dot">.</span>
                        <span className="dot">.</span>
                        <span className="dot">.</span>
                    </span>
                
                <div className='line47'></div>
                <section className="stat-section">
                    <div className="chair-info">
                        <div id='vip-chair'>
                            <div className="red-chair">
                                <div className="top"></div>                    
                                <div className="bottom"></div>                    
                            </div>
                            <p>VIP seat</p>
                        </div>
                        <div id='standard-chair'>
                            <div className="green-chair">
                                <div className="top "></div>                    
                                <div className="bottom"></div>                  
                            </div>
                            <p>Standard</p>
                        </div>
                        <div id='economical-chair'>
                            <div className="blue-chair">
                                <div className="top"></div>                    
                                <div className="bottom"></div>                      
                            </div>
                            <p>Economical</p>
                        </div>

                    </div>
                    
                    <div id='stat-sphere'>
                        <div id='sphere-info'>
                            <div id="percentage-info">
                                <span id='percentage'>46%</span>
                                <span>Left</span>
                            </div>
                        </div>
                        
                    </div>
                </section>

                   
                <h4 className="cart-header">Your Cart</h4>
        
                <div className='line47'></div>
                   
                <div id='sphere-cart'>
                    <img id='red-box'src={redBox}/> 
                 
                </div>
                <div className="stat-footer">
                    <h4 >Cart is Empty 😿</h4>
                    <p>Select available seats that match your perfomance</p>
                </div>
                
                
            </div>
        </div>
    )
}