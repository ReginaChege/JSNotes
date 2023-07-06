class Person{
    constructor(name,age,race){
        this.name=name
        this.age=age
        this.race='Black'
    }
    greet(){
        console.log('Hello');
    }
};
let person=new Person("Jane",50)
console.log(person)
person.greet()

class Student extends Person{
    constructor(name,age){
        super(name,age);
    }
    }
// inheritance
let student = new Student('Henry',45)
console.log({student})

Student.prototype.height="6ft"
console.log(student.height)

class Sister extends Person{
    constructor(name,age){
        super(name,age);
        this.name=name;
        this.age=age;
        this.race='White'
    }
}
let sister=new Student('joan',23)
console.log({sister})