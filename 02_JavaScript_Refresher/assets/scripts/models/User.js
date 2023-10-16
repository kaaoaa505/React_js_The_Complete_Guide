export default class User{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    greet(){
        return `Hello from ${this.name}`;
    }
}