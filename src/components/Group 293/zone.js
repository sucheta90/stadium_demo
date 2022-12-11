import React from 'react';
import Row from './row';

export default class Zones extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
        let totalRow = 9;
        let row_array = [];
        for (let i = 0; i < totalRow; i++){
            if(i<=2){
                row_array.push(<Row  key={`row_${i}`} className='red-chair' row_id={`${this.props.zone_id}_row${i}`}/>)
            }
            else if(i>2 && i <= 5 ){
                row_array.push(<Row key={`row_${i}`} className='green-chair' row_id={`${this.props.zone_id}_row${i}`}/>)
            }
            else{
                row_array.push(<Row key={`row_${i}`} className='blue-chair' row_id={`${this.props.zone_id}_row${i}`}/>)
            }
        }
        return(
            
            <div >
               {row_array}
            </div>
        
        )
    }
}