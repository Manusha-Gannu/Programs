import React,{useState} from "react";
function Gender(){
    const[gender,setGender]=useState();
    return(
        <div>
            <input type="radio" name="gender" value="Male" onChange={(e)=>{setGender(e.target.value)}}/>Male
            <input type="radio" name="gender" value="Fe-Male" onChange={(e)=>{setGender(e.target.value)}}/>Fe-Male
            <input type="radio" name="gender" value="Others" onChange={(e)=>{setGender(e.target.value)}}/>Others
            <br/>
            <h1>{gender}</h1>
        </div>
    )
}

export default Gender;
