import axios from "axios";
import {useState,useEffect} from "react";

const Getrequest = () => {
    const [data,setData] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")

        .then(
            response => setData(response.data)
        )
        .catch(
            error => console.log(error)
        )
    },[])
    return(
        <div>
            <h1>Welcome to React Http Get Calls</h1>
            <h1>{data.map(item=><li key={item.id}>{item.title}</li>
            )}</h1>

        </div>
    )
    
}
export default Getrequest;
