function SetUsername (username){
    //complex DB calls 
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username)
    
    this.email = email
    this.password
}

const chai = new createUser("chai", "ch@gamil.com", "1234")
console.log(chai);
