// let person ={
//     firstname: "Abhishek",
//     lastname: "Kumar",

//     getFullName: function(){
//         return `The name of the person is ${person.firstname} ${person.lastname}`;
//     },
//     phoneNumber:{
//         mobile: "12345",
//         landline: "6789",
//     },
// };

// console.log(person.getFullName());
// console.log(person.phoneNumber.landline);

// function person(firstName,lastname){
//     this.firstName = firstName;
//     this.lastName = lastname;
// }
// let person1=new person("Abhishek","Kumar");
// let person2=new person("Anurag","Mishra");

// console.log(person1.firstName);
// console.log(`${person2.firstName} ${person2.lastName}`);

// const coder={
//     printIntroduction: function(){
//         console.log(`My name is ${this.name}. Am I studying?: ${this.isStudying}`);
//     },
// };
// const me = Object.create(coder);
// me.name = "Abhishek Kumar";
// me.isStudying = true;
// me.printIntroduction();

// class Vehical{
//     constructor(name,maker,engine){
//         this.name=name;
//         this.maker=maker;
//         this.engine=engine;
//     }
//     getDetails(){
//         return `The name of teh vehical is ${this.name}`
//     }
// }
// let v1 = new Vehical("Creta","Hundai","2500cc");
// let v2 = new Vehical("Q5","Audi","3000cc");

// console.log(v1.name);
// console.log(v2.name);
// console.log(v1.getDetails());

// function Vehical(name,maker,engine){
//     this.name=name;
//     this.maker=maker;
//     this.engine=engine;
// }
// Vehical.prototype.getDetails=function(){
//     return`The name of the vehical is ${this.name}`;
// };

// let v1 = new Vehical("Creta","Hundai","2500cc");
// let v2 = new Vehical("Q5","Audi","3000cc");

// console.log(v1.name);
// console.log(v2.name);
// console.log(v1.getDetails());

// class Person{
//     constructor(name,id){
//         this.name=name;
//         this.id=id;
//     }
//     addAddress(newAddress){
//         this.address=newAddress;
//     }

//     getDetails(){
//         console.log(`Name is: ${this.name}, and address is ${this.address}`);
//     }
// }

// let person1 = new Person("Abhishek", 24);
// person1.addAddress("Delhi");
// person1.getDetails();

class Person{
    constructor(firstName,lastName){
        this.firstName=firstName;
        this.lastName=lastName;
    }
    getDetails() {
        return `First name is: ${this.firstName} and last name is: ${this.lastName}`;
    };
}

class Student extends Person{
    constructor(firstName,lastName,rollNumber){
        super(firstName,lastName);
        this.rollNumber=rollNumber;
    }

    getDetails=function(){
        return `First name is: ${this.firstName} and last name is: ${this.lastName} and the roll number is: ${this.rollNumber}`;
    }
}

let person1 = new Person("Abhishek", "Kumar");

console.log(person1.firstName);
console.log(person1.getDetails());

let student1 = new Student("Anurag", "Kumar",30);

console.log(student1.getDetails());