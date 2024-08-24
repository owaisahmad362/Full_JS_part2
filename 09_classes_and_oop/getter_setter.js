class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}owais`
    }

    set password(value){
        this._password = value
    }
}

const owais = new User ("owa@gmail.com", "abc")
console.log(owais.email);