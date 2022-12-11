import React from "react";
import Seat from "./seat";

export default class Row extends React.Component {
    constructor(props) {
        super(props);   
        
    }

    handleClick() {
        this.setState(() => {
            return {data: this.state.data}
        })
    }

    render() { 
        // let zone1 = (<div >

        // </div>)
        let col = [];
         
        let total_seats = 5;
        for(let i =0; i < total_seats; i++){
            col.push(<Seat key={`col${i}`} col_id={`${this.props.row_id}_col${i}`} className={this.props.className}/>)
        }
        return (
            <div className="each-column">{col}</div>
        )

    }
}



/*class X {
    constructor(y) {
        this.y = y
    }
}

class Vehicle extends X{
    constructor(name, maker, engine, anyvalue) {
        super(anyvalue)
        this.name = name;
        this.maker =  maker;
        this.engine = engine;
      }
    getDetails(){
        return (`The name of the bike is ${this.name}.`)
    }
  }
  // Making object with the help of the constructor
  let bike1 = new Vehicle('Hayabusa', 'Suzuki', '1340cc', 21);
  let bike2 = new Vehicle('Ninja', 'Kawasaki', '998cc', 'sucheta');
   
  console.log(bike1.name);    // Hayabusa
  console.log(bike2.maker);   // Kawasaki
  console.log(bike1.getDetails());
  console.log(bike1.y)*/