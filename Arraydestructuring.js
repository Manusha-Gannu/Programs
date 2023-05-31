function Destructuring(){

    let user = ["raj",30,function getData(){
        return "Welcome to Array Destructuring";
    }]
    
    let[userName,userAge,getData] = user;

    console.log(userName);
    console.log(userAge);
    console.log(getData())

    return <h1>Welcome to Array Destructuring</h1>
}

export default Destructuring;
