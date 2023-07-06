let people=[
    {name:'Ann',age:'20',height:'3ft'},
    {name:'Henry',age:'30',height:'7ft'},
    {name:'Susan',age:'40',height:'6ft'}
];
let age=people.map(item=>item.age)
console.log(age);

let weight=people.map(item=>{
    return{
         ...item,
        weight:50
    }
})
console.log({weight})

let changeWeights=weight.map(item=>{
    if (item.name==='Ann')
    {
        item.weight=60;
    }
    return item
   
    
})
console.log({changeWeights})