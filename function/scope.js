let a=20;//global variable
function add(b){
    console.log(a+b)
    //local scope variable cannot be accessed outside the function.i.e you can not reuse it again in onother function.
    let fruit="apple"
    console.log(fruit)
}
add(50);


function greet(){
    let hello="Hi"
    function talk(){
        let c="Hello there"
        console.log(`${hello} ${c}`)
    }
    talk()
}
greet()
