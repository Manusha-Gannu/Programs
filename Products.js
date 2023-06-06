import React,{useState} from "react";
import {Link} from "react-router-dom";

const Products = function(){

    const [Products] = useState([
        {name:"iphone14",price:90000,desc:"A Nice Product",Features:"128GB RAM"},
        {name:"Oneplus10R",price:55000,desc:"A Nice Product",Features:"256GB RAM"},
        {name:"Redminote12",price:30000,desc:"A Nice Product",Features:"512GB RAM"},
        {name:"Vivo25",price:25000,desc:"A Nice Product",Features:"128GB RAM"}
    ]);
    
      return(
        <div>
            <h1>Welcome to products page</h1>
            <ol>
                {
                    Products.map((data)=>{
                        return(
                            <ol><Link to={`/productdetails/${JSON.stringify(data)}`}>{data.name}</Link></ol>
                        )
                    })
                }
            </ol>
        </div>
      )
}

export default Products;
