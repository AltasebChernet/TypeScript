function Logger(constructor: Function) {
    console.log("Logger decorator called...");
    console.log(constructor);
}
@Logger
class User{
    name:string ="Altaseb";
    age:number = 21;

    constructor(){
        console.log("The User class constructor is called...");
        
    }

}

const u1 = new User();
console.log("Name: "+ u1.name);
console.log("Age: "+ u1.age);

