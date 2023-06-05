import React from "react";
class Locations extends React.Component{
    constructor(){
        super();
        this.state={
            counter:0
        }
    }
    //Arrow Functions

    dataChange=()=>{
        this.setState((prevState) =>{
            console.log("prev Value",prevState);
            return {counter:prevState.counter +1}
        })
    }
    render(){
        console.log("Present Value",this.state.counter);
        return(
            <div>
                <h1>Welcome To React States Concept</h1>
                <h1>{this.state.counter}</h1>
                <button type="button" onClick={this.dataChange}>Change</button>
            </div>
        )
    }
}
export default Locations;
