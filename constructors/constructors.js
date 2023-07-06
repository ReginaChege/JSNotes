function Person(names,age){
    this.names=names;
    this.age=age;
}

let person=new Person('Ann',25);
console.log({Person});
console.log(person.age)

person.height="3Ft";
console.log({person});

let students=new Person('Henry',19)
console.log({students})

console.log(Person.prototype)
Person.prototype.gender="Female"
console.log(Person.prototype)
let person2=new Person("Jane",20)
console.log({person2})
console.log(person2.gender);
console.log(person.gender);


