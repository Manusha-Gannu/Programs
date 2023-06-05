import React from "react";

class Lifecycle extends React.Component{

    constructor(props){
        super(props);
        this.state = {Counter:0}
    }

    componentWillMount = () =>{
        console.log("Component Will Mount");
    }

    componentDidMount = () =>{
        console.log("Component Did Mount");
    }

    shouldComponentUpdate = () =>{
        console.log("Should Component Update");
        return true;
    }

    componentWillUpdate = () =>{
        console.log("Component Will Update");
    }

    componentDidUpdate = () =>{
        console.log("Component Did Update");
    }

    dataChange = () =>{
        this.setState({Counter:this.state.Counter +1})
    }

    render(){
        console.log("Render");
        return(
            <div>
                <h1>Welcome to React Component Lifecycle Methods</h1>
                <hr/>
                <h1>{this.state.Counter}</h1>
                <button type="button" onClick={this.dataChange}>Change</button>
            </div>
        )
    }
}

export default Lifecycle;
