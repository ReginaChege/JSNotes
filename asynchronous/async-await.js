function greet(){
    console.log("Welcome to 0our site")
}
let data=[{}];

let createUser=new Promise((resolve,reject)=>{
    if(data){
    setTimeout(()=>{resolve("User successfully created")},5000)
}
    else{
    setTimeout(()=>{reject("iser already exits")},5000)
}
})
// .then(()=>console.log("success"))
// .catch(()=>console.log("fail"))
async function createUserAccount(){
    let response =await createUser
    console.log({response})
}
createUserAccount()
