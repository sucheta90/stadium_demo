import React from 'react';

export default class Seat extends React.Component{
    constructor(props){
        super(props);
    }



    render(){
        return(
            <div className={this.props.className} id={this.props.col_id}>
                <div className="top"></div>                    
                <div className="bottom"></div>                      
            </div>
        )
    }
}