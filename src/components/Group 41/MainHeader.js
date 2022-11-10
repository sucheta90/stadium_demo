import React from "react";
import folder from '../../images/opened-folder.png';
import "./mainHeader.css"

export default function MainHeader(){
    return(
        <div className="main-header">
            <div className="main-header-1">
                <a href='' id='logo'><h1 className="">Meetup</h1></a>
                <div className="line-break"></div>
                <div><img src={folder}/></div>
                <h5 className="team-name">Adam's Team</h5>
                <form>
                <label>
                    FOLDER
                    <button><div className="button-img"></div></button>
                <select>
                    <option value='player 1'>Player 1</option>
                    <option value='player 2'>Player 2</option>
                    <option value='player 3'>Player 3</option>
                    <option value='player 4'>Player 4</option>
                    <option value='player 5'>Player 5</option>
                </select>
                </label>
                </form>

            </div>
            <div className="main-header-2">
                
            </div>
            

        </div>
    )
}