import React from "react";
import folder from '../../images/opened-folder.png';
import "./mainHeader.css"

export default function MainHeader(){
    return(
        <div className="main-header">
            <div className="main-header-1">
                <a href='' id='logo'><h1 className="">Meetup</h1></a>
                <div className="line-break"></div>
                <div><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M16.8843 5.11485H13.9413C13.2081 5.11969 12.512 4.79355 12.0474 4.22751L11.0782 2.88762C10.6214 2.31661 9.9253 1.98894 9.19321 2.00028H7.11261C3.37819 2.00028 2.00001 4.19201 2.00001 7.91884V11.9474C1.99536 12.3904 21.9956 12.3898 21.9969 11.9474V10.7761C22.0147 7.04924 20.6721 5.11485 16.8843 5.11485Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.8321 6.54346C21.1521 6.91754 21.3993 7.34785 21.5612 7.81235C21.8798 8.76704 22.0273 9.77029 21.9969 10.7761V16.0291C21.9956 16.4716 21.963 16.9134 21.8991 17.3512C21.7775 18.124 21.5057 18.8655 21.0989 19.5341C20.9119 19.8571 20.6849 20.1552 20.4231 20.4214C19.2383 21.5089 17.665 22.0749 16.0574 21.992H7.93061C6.32049 22.0743 4.74462 21.5085 3.55601 20.4214C3.2974 20.1547 3.07337 19.8566 2.88915 19.5341C2.48475 18.866 2.21869 18.1237 2.1067 17.3512C2.03549 16.9141 1.99981 16.472 2 16.0291V10.7761C1.99983 10.3373 2.02357 9.89895 2.07113 9.4628C2.08113 9.38628 2.09614 9.31101 2.11098 9.23652C2.13573 9.11233 2.16005 8.99031 2.16005 8.86829C2.25031 8.34196 2.41496 7.83108 2.64908 7.35094C3.34261 5.86908 4.76525 5.11484 7.09481 5.11484H16.8754C18.1802 5.01393 19.4753 5.40673 20.5032 6.21514C20.6215 6.31552 20.7316 6.42532 20.8321 6.54346ZM6.97033 15.5411H17.0355H17.0533C17.2741 15.5507 17.4896 15.4716 17.6517 15.3216C17.8137 15.1715 17.9088 14.963 17.9157 14.7425C17.9282 14.5487 17.8644 14.3576 17.7379 14.2101C17.5924 14.0118 17.3618 13.8934 17.1155 13.8906H6.97033C6.51365 13.8906 6.14343 14.2601 6.14343 14.7159C6.14343 15.1716 6.51365 15.5411 6.97033 15.5411Z" fill="white"/>
<svg width="8" height="3" viewBox="0 0 8 3" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.38886 0.857178C5.02473 2.37189 2.89672 2.38985 1.51953 0.857178" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="white"/>
</svg>

</svg></div>
                <h5 className="team-name">Adam's Team</h5>
                <span id='folder'>FOLDER </span>
                {/* <form>
                <label>
                    FOLDER
                    <span className="button-img"></span>
                <select>
                    <option value='player 1'>Player 1</option>
                    <option value='player 2'>Player 2</option>
                    <option value='player 3'>Player 3</option>
                    <option value='player 4'>Player 4</option>
                    <option value='player 5'>Player 5</option>
                </select>
                </label>
                </form> */}

            </div>
            <div className="main-header-2">
                <form>
                    <input type='input' placeholder="search-btn Type to search... mic"></input>
                </form>
                <span className="line-break"></span>
                <div><svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10 16.8476C15.6392 16.8476 18.2481 16.1242 18.5 13.2205C18.5 10.3188 16.6812 10.5054 16.6812 6.94511C16.6812 4.16414 14.0452 1 10 1C5.95477 1 3.31885 4.16414 3.31885 6.94511C3.31885 10.5054 1.5 10.3188 1.5 13.2205C1.75295 16.1352 4.36177 16.8476 10 16.8476Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="white"/>
                    </svg>
                </div>
                {/* <div><svg xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon" ><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg></div> */}
                <div>moon</div>
                <span className="line-break"></span>
                <button className="premium-btn">
                    <div>star</div>
                    <span>PREMIUM</span>

                </button>
            </div>
            

        </div>
    )
}