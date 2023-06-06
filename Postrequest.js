import React from "react";
import axios from "axios";

class Postrequest extends React.Component{
    constructor(){
        super();
        this.state={
            userId:" ",
            title:" ",
            body:" "
        }
    }
    handleInputData = (e) =>{
        this.setState({[e.target.name]:[e.target.value]})
    }

    postData =(e) =>{
        e.preventDefault();
        axios.post("https://jsonplaceholder.typicode.com/posts",this.state)
        .then((response)=>{console.log(response)})
        .catch((error) =>{console.log(error)})
    }

    render(){
        const{userId,title,body} = this.state

        return(
            <div>
                <h1>Welcome to Http Post Calls</h1>
                <form>
                    <div>
                        userId:<input type="text" value={userId} name="userId" onChange={this.handleInputData}/>
                    </div><br/>
                    <div>
                    title:<input type="text" value={title} name="title" onChange={this.handleInputData}/>
                    </div><br/>
                    <div>
                    body:<input type="text" value={body} name="body" onChange={this.handleInputData}/>
                    </div><br/>
                    <div>
                        <button type="submit" onClick={this.postData}>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Postrequest;
