import React from "react";
import Logic from "./Logic";

class Mouseover extends React.Component{
    render(){
        return(
            <div>
                <h1>Welcome to Higher-Order Components</h1>
                <button type="button" onMouseOver={this.props.inccnt}>Mouseover</button>
                <h1>{this.props.data}</h1>
            </div>
        )
    }
}

export default Logic(Mouseover);
