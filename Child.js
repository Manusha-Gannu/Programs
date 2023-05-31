import React from "react";
import child from "./Child.jpg";
import "./styles.css";
import { Mycontext } from "./Grandfather";

class Child extends React.Component{
    render(){
        return(
            <div className="Child">
                <h1>I am Child</h1>
                <img src={child} width="200" height="100"/>
                <Mycontext.Consumer>
                    {
                        (data)=>{
                            return(
                                <div>
                                    <h1>{data.HNo}</h1>
                                    <h1>{data.Location}</h1>
                                </div>
                            )
                        }
                    }
                </Mycontext.Consumer>
            </div>
        )
    }
}

export default Child;
