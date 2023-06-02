import React from "react";
import axios from "axios";

class Getcall extends React.Component{
    constructor(){
        super();
        this.state={
            posts:[]
        }
    }
    //component on mounting this phase will works

   /* componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response =>{this.setState({posts:response.data})})
        .catch(error =>{console.log(error)})
    }*/

    //onclicking the button

    getData = () =>{ 
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(response =>{this.setState({posts:response.data})})
    .catch(error =>{console.log(error)})

    }



    render(){
        const{posts}=this.state

        return(
            <div>
                <h1>Welcome to React Getcall by using class Component</h1>
                <hr/>
                <button type="button" onClick={this.getData}>GetData</button>
                {
                    posts.map(post =><li key={post.id}>{post.title}</li>)
                }
                {
                    posts.map(p =><ol key={p.id}>{p.body}</ol>)
                }
            </div>
        )
    }
}

export default Getcall;
