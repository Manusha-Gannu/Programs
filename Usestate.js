import React,{useState} from "react";

function UpdateName(){
   let[count,setCount] = useState(0);

    return(
        <div>
            <h1>{count}</h1>
            <button type="button" onClick = {() =>{setCount(count +1)}}>Change</button>
        </div>
    )
} 

export default UpdateName;
