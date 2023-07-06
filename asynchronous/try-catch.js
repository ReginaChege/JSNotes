let sucess=true
const performTask=()=>{
return new Promise((resolve, reject) => {
    setTimeout(()=>{sucess?resolve():reject},2000)
})
}
 const successful=async()=>{
    try{
    let a=await performTask();
    console.log('task sucessful')
    }
    catch{
        console.log('task not successful')
    
    }

}
successful()