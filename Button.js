import React from "react";
import Logic from "./Logic";

class Button extends React.Component{
    render(){
        return(
            <div>
                <h1>Welcome to Higher-Order Component</h1>
                <hr/>
                <button type="button" onClick={this.props.inccnt}>Click</button>
                <h1>{this.props.data}</h1>
            </div>
        )
    }
}

export default Logic(Button);
