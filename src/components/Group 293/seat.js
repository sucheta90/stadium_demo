import React from 'react';
import { Icon } from '@iconify/react';

export default class Seat extends React.Component{
    constructor(props){
        super(props);
    }



    render(){
        if(this.props.className === 'red-chair'){
            return <Icon icon="material-symbols:event-seat-rounded" id={this.props.col_id} style={{color:'#FA2256', filter: 'drop-shadow(0 0 25px #FA2256)', transform: 'scale(1.5)'}} />
        }
        else if( this.props.className === 'green-chair'){
            return <Icon icon="material-symbols:event-seat-rounded" id={this.props.col_id} style={{color:'#30E0A1', filter: 'drop-shadow(0 0 25px #30E0A1)', transform: 'scale(1.5)'}} />
        }
        else{
            return <Icon icon="material-symbols:event-seat-rounded"  id={this.props.col_id} style={{color:'#246CF9', filter: 'drop-shadow(0 0 25px #246CF9)',transform: 'scale(1.5)' }} />

        }



        // return(
            
        //     <div className={this.props.className} id={this.props.col_id}>
        //         {/* <div className="top"></div>                    
        //         <div className="bottom"></div>                       */}
                
        //         <Icon icon="material-symbols:event-seat-rounded" />
        //     </div>
            
        
        // )
    }
}