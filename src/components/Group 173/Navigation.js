import React from "react";
import './Navigation.css';


export default function Navigation(){
    
    return(
        <div id='navigation'>
            <div className="nav-sec-1"></div>
                 
                <a href='#' id='back-btn'>
                    <span className="left-arrow">
                        <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.25 7.27429L16.25 7.27429" stroke="#757B8C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M7.2998 13.2987L1.2498 7.27469L7.2998 1.24969" stroke="#757B8C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </span>
                    <span>Back</span>
                </a>
                    
            
                <span className="line"></span>
            
                <div className="process-nav">
                    <span className="process" id='choose-seats'>Choose Seats</span>
                    <div className="underline"></div>
                    <div>
                        <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.635795 -2.77915e-08C0.754477 -3.29792e-08 0.871463 0.0339069 0.974886 0.0999822L7.70245 4.4479C7.88725 4.56788 8 4.77567 8 4.99998C8 5.22428 7.88725 5.43207 7.70245 5.55205L0.974886 9.89997C0.779061 10.026 0.531525 10.0339 0.328918 9.91823C0.125464 9.80347 -1.81295e-08 9.58525 -2.85044e-08 9.3479L-4.08612e-07 0.652057C-4.18986e-07 0.414708 0.125463 0.196486 0.328918 0.0817242C0.424711 0.0269518 0.530677 -2.31966e-08 0.635795 -2.77915e-08Z" fill="#3C4254"/>
                        </svg>
                    </div>
                    <span className="process " id='ticket-payment'>Tickets & Payments</span>
                    <div><svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.635795 -2.77915e-08C0.754477 -3.29792e-08 0.871463 0.0339069 0.974886 0.0999822L7.70245 4.4479C7.88725 4.56788 8 4.77567 8 4.99998C8 5.22428 7.88725 5.43207 7.70245 5.55205L0.974886 9.89997C0.779061 10.026 0.531525 10.0339 0.328918 9.91823C0.125464 9.80347 -1.81295e-08 9.58525 -2.85044e-08 9.3479L-4.08612e-07 0.652057C-4.18986e-07 0.414708 0.125463 0.196486 0.328918 0.0817242C0.424711 0.0269518 0.530677 -2.31966e-08 0.635795 -2.77915e-08Z" fill="#3C4254"/>
                        </svg>
                    </div>
                    <span className="process" id='success'>Success</span>
                </div>

            <div className="nav-sec-2">
                <div id="seat-occupied">
                    <div className="blue-chair">
                        <div className="top"></div>                    
                        <div className="bottom"></div>                      
                    </div>
                    <span>Occupied</span>
                </div>
                
                <div id='seat-available'>
                    <div className="blue-chair">
                        <div className="top"></div>                    
                        <div className="bottom"></div>                      
                    </div>
                    <span>Available</span>
                </div>
               
                
            </div>   
            

        </div>
    )
}
