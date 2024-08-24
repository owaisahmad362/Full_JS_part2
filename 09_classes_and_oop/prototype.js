// let myName = "owais......"

// console.log(myName.trueLength);

let myHeros = ["Baber", "Rizwan"]

let heroPower = {
    thor:"hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spider power is ${this.spiderman}`);
    }
}

Object.prototype.owais = function(){
    console.log(`owais is present in all objects`);
}

Array.prototype.heyOwais = function(){
    console.log(`Owais says hello`);
}

// heroPower.owais()
// myHeros.owais()
// myHeros.heyOwais()

// inheritance

const User = {
    name: " chai",
    email: "ch@gmai.com"
}

const Teacher = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport,
}

Teacher.__proto__ = User

//modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsernme = "codeinjs      "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsernme.trueLength()
"owais".trueLength()