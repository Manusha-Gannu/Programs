import React from "react";

class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: " ",
            email: " ",
            password: " ",
            city: " ",
            msg: " "
        }
    }

    handleNameChange = (e) => {
        this.setState({name:e.target.value})
    }

    handleEmailChange = (e) => {
        this.setState({email:e.target.value})
    }

    handlePasswordChange = (e) => {
        this.setState({password:e.target.value})
    }

    handleCityChange = (e) => {
        this.setState({city:e.target.value})
    }

    handleMsgChange = (e) => {
        this.setState({msg:e.target.value})
    }

    handleFormData = (e) => {
        alert(`
        ${this.state.name}
        ${this.state.email}
        ${this.state.password}
        ${this.state.city}
        ${this.state.msg}
        `)
        e.preventDefault();
    }
    render(){
        const{name,email,password,city,msg}=this.state;
        return(
            <div>
                <form onSubmit = {this.handleFormData}>
                    <div align="center">
                        <label>Enter Name:</label>
                        <input type="text" value={name} onChange={this.handleNameChange}/>
                    </div><br/>
                    <div align="center">
                        <label>Enter Email:</label>
                        <input type="email" value={email} onChange={this.handleEmailChange}/>
                    </div><br/>
                    <div align="center">
                        <label>Enter Password:</label>
                        <input type="password" value={password} onChange={this.handlePasswordChange}/>
                    </div><br/>
                    <div align="center">
                        <label>Select City:</label>
                        <select value={city} onChange={this.handleCityChange}>
                            <option>Hyderabad</option>
                            <option>Secunderabad</option>
                            <option>Warangal</option>
                        </select>
                    </div><br/>
                    <div align="center">
                        <label>Leave a Msg:</label>
                        <textarea value={msg} onChange={this.handleMsgChange}></textarea>
                    </div><br/>
                    <div align="center">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Form;
