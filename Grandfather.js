import React from "react";
import Grandpa from "./Grandpa.jpg";
import "./styles.css";
import Child from "./Child";

export const Mycontext=React.createContext();

class Grandfather extends React.Component{
    constructor(props){
        super(props);
        this.state={
            Building:"Amzad Villa",
            Address:{
                HNo:123,Location:"Hyderabad"
            }
        }
    }

    render(){
        return(
            <div className="Grandpa">
                <h1>I am Grandfather</h1>
                
                <img src={Grandpa} width="200" height="100"/>
                <Mycontext.Provider value={this.state.Address}>
                    <Child></Child>
                </Mycontext.Provider>
            </div>
        )
    }
}

export default Grandfather;
