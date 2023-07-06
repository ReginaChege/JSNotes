function talk(statement,callback){
    console.log(statement)
    callback(statement)
}
function greet(statement){
    console.log('hello there')
    console.log({statement});
}
talk('i love the coronation',greet)