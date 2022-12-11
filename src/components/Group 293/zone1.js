import React from 'react';
import Row from './row';

export default class Zone1 extends React.Component{
    constructor(props){
        super(props);
    }


    render(){

        let totalRow = 9;
        let row_array = [];
        for (let i = 0; i < totalRow; i++){
            if(i<=2){
                row_array.push(<Row key={`row_${i}`} className='red-chair'/>)
            }
            else if(i>2 && i <= 5 ){
                row_array.push(<Row key={`row_${i}`} className='green-chair'/>)
            }
            else{
                row_array.push(<Row key={`row_${i}`} className='blue-chair' />)
            }
        }
        return(
            <div className='zone-1' key='z1'>
               {row_array}
            </div>
           
            
        )
    
    }
}