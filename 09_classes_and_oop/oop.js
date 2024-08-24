// const user ={
//     username:"owais"
//     loginCount: 8,
//     signedIn: true

//     getUserDetails: function(){
//         console.log("Got user details from database");
//     }
// }

// console.log(user.username);
// console.log(user.getUserDetails());


const user = {
    username:"owais",
    loginCount: 8,
    signedIn: true,
  
    getUserDetails: function(){
      console.log("Got user details from database");
      //return "User details retrieved";
    //   console.log(`Username: ${this.username}`);
    console.log(this);
    }
  }
  
  //console.log(user.username);
//   console.log(user.getUserDetails());
// console.log(this);

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcom to ${this.username}`);
    }

    return this
}

const userOne = new User("owais",12, true)
const userTwo = new User("js code", 11, false)
console.log(userOne);
console.log(userTwo);