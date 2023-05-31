import "./styles.css";

function Courses(props){
    return (
        <div className="Courses">
            <h1>{props.name}</h1>
            <h3>{props.platform}</h3>
            <img src={props.image}/>
        </div>
    )
}

export default Courses;
