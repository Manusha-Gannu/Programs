import React from "react";
import father from "./Father.png";
import "./styles.css";
import Child from "./Child";

class Father extends React.Component{
    render(){
        return(
            <div className="Father">
                <h1>I am Father</h1>
                <img src={father} width="200" height="100"/>
                <h1>{this.props.property}</h1>
                <Child Croperty={this.props.property}></Child>
            </div>
        )
    }
}

export default Father;
