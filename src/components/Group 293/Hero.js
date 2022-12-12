import React from "react";
import "./Hero.css";
import Zone from './zone';
import { Icon } from '@iconify/react';
//import Zone1 from "./zone1";

export default function Hero(){

    // let seat_blue = <div className="blue-chair">
    //                     <div className="top"></div>                    
    //                     <div className="bottom"></div>                      
    //                 </div>
                    
                    
               
    // let seat_red =  <div className="red-chair">
    //                     <div className="top"></div>                    
    //                     <div className="bottom"></div>                      
    //                 </div>
                    
                
    // let seat_green = <div className="green-chair">
    //                     <div className="top"></div>                    
    //                     <div className="bottom"></div>                      
    //                 </div>
    //const [isActive, setIsActive]= React.useState(true)
    // function toggle(e){
    //     if (e.target.className === 'top' || e.target.className === 'bottom') {
    //         console.log(e.target.parentNode.style.opacity)
    //         // opacity blank means current state enabled
    //         if(e.target.parentNode.style.opacity) {
    //             e.target.parentNode.style='opacity:""'
    //         }else {
    //             // opacity is non blank so curren tstate is disabled
    //             e.target.parentNode.style='opacity:40%'
    //         }

    //     }else{
    //         console.log("outer blank space clicked")
    //     }
    // }
            
    return(
        <div id='hero'>
            
            <div id='scene'>
                <div id='vertical-left'></div>
                <div id='left-box'></div>
                <div id="box-base"></div>
                <div id='right-box'></div>
                <div id='vertical-right'></div>
                <h1 className="scene-header">SCREEN</h1>
            </div>
            <div className="seating">
            <Zone zone_id="z1"  />
            
            <Zone zone_id="z2"/>

            <Zone zone_id="z3" />
            </div>
           


        </div>
        
    )
}