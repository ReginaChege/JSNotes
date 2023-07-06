let greet=()=>{
    let name='John'
    let displayName=()=>{
        return `Hi I am ${name}`
    }
    return displayName
}
let talk=greet();
console.log({talk})
console.log(talk());

let nums=(nums)=>{
    let add =(digit)=>{
     return digit +nums   
    }
    return add
}
let addition=nums(45)
console.log({addition})
console.log(addition(20));