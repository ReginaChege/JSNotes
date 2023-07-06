// creating an object.

let person ={
    name:"Susan",
    age:25,
    height:"5ft 3inch",
    freinds:{
        name:"Amanda",
        age:20,
    }
}
let student = new Object();

student.name="Mary", //adding a property
console.log(person.age)//log a value
console.log(person['name'])
console.log(person.freinds.name);
console.log({student});
person.age=27;
person.school="AkiraChix"
console.log({person})

let person2=Object.assign(person);
console.log({person2});
let keys =Object.keys(person);
console.log({keys});

