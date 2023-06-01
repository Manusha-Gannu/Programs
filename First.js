import React from "react";
import Courses from "./Courses";
import img from "./ReactJslogo.webp";
import html from "./Html5.png";
import Css from "./Css.png";
import "./styles.css";
class First extends React.Component{
    render(){
        return(
            <div className="Fcourse">
                <Courses name="ReactJS" platform="Front-End" image={img}></Courses>
                <Courses name="Html" platform="Front-End" image={html}></Courses>
                <Courses name="css" platform="Front-End" image={Css}></Courses>
            </div>
        )
    }

}
export default First;
