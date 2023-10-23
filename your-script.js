var sms = "Hello, world!";
function greet(name){

    console.log('hi' + name);
}
greet("mohamad");

function square(number){
    let result=number*number;
    return result;
}

let result=square(4);
console.log(result)
let productcount=2;
let productprice=1000;
let credit=2000;
let buy=productcount>0 && credit>productprice;
console.log(buy)

