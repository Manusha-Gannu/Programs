import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import "./styles.css";
import Products from "./Products";
import Productdetails from "./Productdetails";

const Routingapp=function(){
    return(
        <div>
            <h1>Welcome to React Routing Application</h1>
            <Router>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="./about">/About</Link>
                    </li>
                    <li>
                        <Link to="/products">/Products</Link>
                    </li>
                </ul>
              <Switch>
                <Route  exact path="/" component={Home}></Route>
                <Route  exact path="/about" component={About}></Route>
                <Route exact path="/products" component={Products}></Route>
                <Route exact path="/productdetails/:name/:price" component={Productdetails}></Route>
              </Switch>
            </Router>
        </div>
    )
}

export default Routingapp;
