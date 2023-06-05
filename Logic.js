import React from "react";
const Logic = function(Mouseover){
    class Newcomponent extends React.Component{
        constructor(){
            super();
            this.state={counter:0}
        }

        handleCounter= () =>{
            this.setState({counter:this.state.counter+1})
        }

        render(){
            return(
                <div>
                    <Mouseover data={this.state.counter} inccnt={this.handleCounter}></Mouseover>
                </div>
            )
        }
    }
    return Newcomponent
}

export default Logic;
