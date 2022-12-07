import React from "react";
import "./Hero.css"
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
            {/* <div id='round-area-btn'>
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
            </div> */}

            {/* <div id='control-btn-left'>
                <div className="btn-grp">
                    <span className="plus-counter">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7 11C6.44772 11 6 11.4477 6 12C6 12.5523 6.44772 13 7 13L11 13L11 17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17L13 13L17 13C17.5523 13 18 12.5523 18 12C18 11.4477 17.5523 11 17 11L13 11L13 7C13 6.44771 12.5523 6 12 6C11.4477 6 11 6.44771 11 7L11 11L7 11Z" fill="#757B8C"/>
                        </svg>
                    </span>
                    <span className="line-br"></span>
                    <span className="minus-counter">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 18C11.4477 18 11 17.5523 11 17L11 7C11 6.44771 11.4477 6 12 6C12.5523 6 13 6.44771 13 7L13 17C13 17.5523 12.5523 18 12 18Z" fill="#757B8C"/>
                        </svg>
                    </span>
                </div>
                <div className="search-btn">
                    <span>
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="7.85579" cy="7.91047" r="6.91047" stroke="#757B8C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12.6636 13.0757L15.3729 15.778" stroke="#757B8C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </span>
                </div>
                <div className="setting-btn">
                    <span>
                    <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M18.8066 6.62358L18.1842 5.54349C17.6576 4.62957 16.4907 4.31429 15.5755 4.83869V4.83869C15.1399 5.09531 14.6201 5.16812 14.1307 5.04106C13.6413 4.91399 13.2226 4.59749 12.9668 4.16134C12.8023 3.88412 12.7139 3.56836 12.7105 3.24601V3.24601C12.7254 2.72919 12.5304 2.22837 12.17 1.85764C11.8096 1.48691 11.3145 1.27783 10.7975 1.27805H9.54347C9.03694 1.27804 8.55128 1.47988 8.19397 1.83891C7.83666 2.19795 7.63714 2.68456 7.63958 3.19109V3.19109C7.62457 4.23689 6.77245 5.07678 5.72654 5.07667C5.40418 5.07332 5.08843 4.98491 4.8112 4.82038V4.82038C3.89603 4.29598 2.72908 4.61126 2.20251 5.52519L1.53432 6.62358C1.00838 7.53636 1.31937 8.70258 2.22997 9.23228V9.23228C2.82187 9.57401 3.1865 10.2056 3.1865 10.889C3.1865 11.5725 2.82187 12.204 2.22997 12.5458V12.5458C1.32053 13.0719 1.0092 14.2353 1.53432 15.1453V15.1453L2.16589 16.2346C2.41262 16.6798 2.82657 17.0083 3.31616 17.1474C3.80575 17.2866 4.33061 17.2249 4.77459 16.976V16.976C5.21105 16.7213 5.73116 16.6515 6.21931 16.7822C6.70746 16.9128 7.12321 17.233 7.37413 17.6716C7.53867 17.9489 7.62708 18.2646 7.63043 18.587V18.587C7.63043 19.6435 8.48692 20.5 9.54347 20.5H10.7975C11.8505 20.5 12.7055 19.6491 12.7105 18.5961V18.5961C12.7081 18.088 12.9088 17.6 13.2681 17.2407C13.6274 16.8814 14.1154 16.6806 14.6236 16.6831C14.9451 16.6917 15.2596 16.7797 15.5389 16.9394V16.9394C16.4517 17.4653 17.6179 17.1543 18.1476 16.2437V16.2437L18.8066 15.1453C19.0617 14.7075 19.1317 14.186 19.0012 13.6963C18.8706 13.2067 18.5502 12.7893 18.111 12.5366V12.5366C17.6717 12.2839 17.3514 11.8665 17.2208 11.3769C17.0902 10.8873 17.1602 10.3658 17.4153 9.92793C17.5812 9.63831 17.8213 9.39817 18.111 9.23228V9.23228C19.0161 8.70286 19.3264 7.54346 18.8066 6.63274V6.63274V6.62358Z" stroke="#757B8C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <circle cx="10.175" cy="10.889" r="2.63616" stroke="#757B8C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                    </span>
                </div>
            </div> */}




        </div>
        
    )
}