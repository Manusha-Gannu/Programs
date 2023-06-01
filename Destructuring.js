function Destructuring(){

    let user = {
        userName : "John",
        userAge : 25,
        getName(){
            return "DAVID";
        }
    }
    let {userName,userAge,getName} = user;

    console.log(userName);
    console.log(userAge);
    console.log(getName())

    return <h1>Welcome to Object Destructuring</h1>
}

export default Destructuring;
