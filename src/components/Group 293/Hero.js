import React from "react";
import "./Hero.css"
import StadiumPreview from "./Group 205/StadiumPreview";
import {useState} from 'react';

export default function Hero(){

    let seat_blue = <a href=""><div className="blue-chair">
                        <div className="top"></div>                    
                        <div className="bottom"></div>                      
                    </div>
                    </a>
                    
               
    let seat_red =  <div className="red-chair">
                        <div className="top"></div>                    
                        <div className="bottom"></div>                      
                    </div>
                    
                
    let seat_green = <div className="green-chair">
                        <div className="top"></div>                    
                        <div className="bottom"></div>                      
                    </div>
    //const [isActive, setIsActive]= React.useState(true)
    function toggle(e){
        if (e.target.className === 'top' || e.target.className === 'bottom') {
            console.log(e.target.parentNode.style.opacity)
            // opacity blank means current state enabled
            if(e.target.parentNode.style.opacity) {
                e.target.parentNode.style='opacity:""'
            }else {
                // opacity is non blank so curren tstate is disabled
                e.target.parentNode.style='opacity:40%'
            }

        }else{
            console.log("outer blank space clicked")
        }
    }
            
    return(
        <div id='hero'>
            <StadiumPreview />
            <div id='scene'>
                <div id='vertical-left'></div>
                <div id='left-box'></div>
                <div id="box-base"></div>
                <div id='right-box'></div>
                <div id='vertical-right'></div>
                <h1 className="scene-header">SCENE</h1>
            </div>
            <div id='stad-mid' onClick={toggle}>
                <div className="row-red">
                    <div className="red-row-1">
                        
                        <div className="red-chair"id='red-mid-A1'>
                        <div className="top" ></div>                    
                        <div className="bottom"></div>                      
                        </div>
                        <div className="red-chair" id='red-mid-A2'>
                        <div className="top"></div>                    
                        <div className="bottom"></div>                      
                        </div>
                        <div className="red-chair" id='red-mid-A3'>
                        <div className="top"></div>                    
                        <div className="bottom"></div>                      
                        </div>
                        <div className="red-chair" id='red-mid-A4'>
                        <div className="top"></div>                    
                        <div className="bottom"></div>                      
                        </div>
                        <div className="red-chair" id='red-mid-A5'>
                        <div className="top"></div>                    
                        <div className="bottom"></div>                      
                        </div>
                        <div className="red-chair" id='red-mid-A6'>
                        <div className="top"></div>                    
                        <div className="bottom"></div>                      
                        </div>
                        <div className="red-chair" id='red-mid-A7'>
                        <div className="top"></div>                    
                        <div className="bottom"></div>                      
                        </div>
                        <div className="red-chair" id='red-mid-A8'>
                        <div className="top"></div>                    
                        <div className="bottom"></div>                      
                        </div>
                        <div className="red-chair" id='red-mid-A9'>
                        <div className="top"></div>                    
                        <div className="bottom"></div>                      
                        </div>
            
                        </div>
                    <div className="red-row-2">{seat_red} {seat_red}{seat_red} {seat_red} {seat_red} {seat_red} {seat_red} {seat_red} {seat_red} {seat_red}</div>
                    <div className="red-row-3">{seat_red} {seat_red} {seat_red} {seat_red} {seat_red} {seat_red} {seat_red} {seat_red} {seat_red} {seat_red} {seat_red}</div>
                </div>
                <div className="row-green">
                    <div className="green-row-1">{seat_green}{seat_green}{seat_green}{seat_green}{seat_green}{seat_green}{seat_green}{seat_green}{seat_green}{seat_green}{seat_green}{seat_green}</div>
                    <div className="green-row-2">{seat_green}{seat_green}{seat_green}{seat_green}{seat_green}{seat_green}{seat_green}{seat_green}{seat_green}{seat_green}{seat_green}{seat_green}{seat_green}</div>
                    <div className="green-row-3">{seat_green}{seat_green}{seat_green}{seat_green}{seat_green}{seat_green}{seat_green}{seat_green}{seat_green}{seat_green}{seat_green}{seat_green}{seat_green}{seat_green}</div>
                </div>
                <div className="row-blue">
                    <div className="blue-row-1">{seat_blue}{seat_blue}{seat_blue}{seat_blue}{seat_blue}{seat_blue}{seat_blue}{seat_blue}{seat_blue}{seat_blue}{seat_blue}{seat_blue}{seat_blue}{seat_blue}{seat_blue}</div>
                    <div className="blue-row-2">{seat_blue}{seat_blue}{seat_blue}{seat_blue}{seat_blue}{seat_blue}{seat_blue}{seat_blue}{seat_blue}{seat_blue}{seat_blue}{seat_blue}{seat_blue}{seat_blue}{seat_blue}{seat_blue}</div>
                    <div className="blue-row-3">{seat_blue}{seat_blue}{seat_blue}{seat_blue}{seat_blue}{seat_blue}{seat_blue}{seat_blue}{seat_blue}{seat_blue}{seat_blue}{seat_blue}{seat_blue}{seat_blue}{seat_blue}{seat_blue}{seat_blue}</div>
                </div>
                
            </div>
            <div id= 'stad-left' onClick={toggle}>
            <div className="row-red">
                    <div className="red-row-1">{seat_red} {seat_red} {seat_red} {seat_red} {seat_red} </div>
                    <div className="red-row-2">{seat_red} {seat_red}{seat_red} {seat_red} {seat_red} </div>
                    <div className="red-row-3">{seat_red} {seat_red} {seat_red} {seat_red} {seat_red}</div>
                </div>
                <div className="row-green">
                    <div className="green-row-1">{seat_green}{seat_green}{seat_green}{seat_green}{seat_green}</div>
                    <div className="green-row-2">{seat_green}{seat_green}{seat_green}{seat_green}{seat_green}</div>
                    <div className="green-row-3">{seat_green}{seat_green}{seat_green}{seat_green}{seat_green}</div>
                </div>
                <div className="row-blue">
                    <div className="blue-row-1">{seat_blue}{seat_blue}{seat_blue}{seat_blue}{seat_blue}</div>
                    <div className="blue-row-2">{seat_blue}{seat_blue}{seat_blue}{seat_blue}{seat_blue}</div>
                    <div className="blue-row-3">{seat_blue}{seat_blue}{seat_blue}{seat_blue}{seat_blue}</div>
                </div>
            </div>
            <div id= 'stad-right' onClick={toggle}>
                <div className="row-red">
                    <div className="red-row-1">{seat_red} {seat_red} {seat_red} {seat_red} {seat_red} </div>
                    <div className="red-row-2">{seat_red} {seat_red}{seat_red} {seat_red} {seat_red} </div>
                    <div className="red-row-3">{seat_red} {seat_red} {seat_red} {seat_red} {seat_red}</div>
                </div>
                <div className="row-green">
                    <div className="green-row-1">{seat_green}{seat_green}{seat_green}{seat_green}{seat_green}</div>
                    <div className="green-row-2">{seat_green}{seat_green}{seat_green}{seat_green}{seat_green}</div>
                    <div className="green-row-3">{seat_green}{seat_green}{seat_green}{seat_green}{seat_green}</div>
                </div>
                <div className="row-blue">
                    <div className="blue-row-1">{seat_blue}{seat_blue}{seat_blue}{seat_blue}{seat_blue}</div>
                    <div className="blue-row-2">{seat_blue}{seat_blue}{seat_blue}{seat_blue}{seat_blue}</div>
                    <div className="blue-row-3">{seat_blue}{seat_blue}{seat_blue}{seat_blue}{seat_blue}</div>
                </div>
            </div>
            <div id='round-area-btn'>
                <span className="left-arrow">
                    <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.25 7.27429L16.25 7.27429" stroke="#757B8C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M7.2998 13.2987L1.2498 7.27469L7.2998 1.24969" stroke="#757B8C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </span>
                <p>Round Area</p>
            </div>
            <div id='final-area-btn'>
                <p>Final Area</p>
                <span className="right-arrow">
                    <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.25 7.27429L16.25 7.27429" stroke="#757B8C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M7.2998 13.2987L1.2498 7.27469L7.2998 1.24969" stroke="#757B8C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </span>
            </div>

            <div id='control-btn-left'>
                <div className="btn-grp">
                    <span className="plus-counter"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7 11C6.44772 11 6 11.4477 6 12C6 12.5523 6.44772 13 7 13L11 13L11 17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17L13 13L17 13C17.5523 13 18 12.5523 18 12C18 11.4477 17.5523 11 17 11L13 11L13 7C13 6.44771 12.5523 6 12 6C11.4477 6 11 6.44771 11 7L11 11L7 11Z" fill="#757B8C"/>
</svg>
</span>
                    <span className="line-br"></span>
                    <span className="minus-counter"></span>
                </div>
                <div className="search-btn"></div>
                <div className="setting-btn"></div>
            </div>




        </div>
        
    )
}