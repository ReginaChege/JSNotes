let sucesss=true;
let promise=new Promise((resolve,reject)=>{
    if (sucesss){
        resolve('i have a job')
    }
    else{
        reject('i dont have a job')
    }
})
console.log({promise})

promise.then(()=>{
    console.log('i will pay my debt')
})
promise.catch(error=>{
    console.log(error.message);
    console.log('i will apply again after three months');
})
promise.finally(()=>{
    console.log('i will make my family proud');
})
