console.log("hello")


// check carectros repeat in this string

const str = "hare krishna har ram hare kriswhna krishna"

const obj = {
    
};

for(let x of str){
    if(obj[x]){
        obj[x] += 1;
    }
    else{
        obj[x]=1
    }
}
console.log(obj)


// check code and provide answer

let num = 1;
const sum = ++num + num++
console.log(sum)

// 

console.log("3"+ 1+ 2)
console.log( 1+ 2+ "3")

//  function call 

function Pay(event){
    if(event.isTrusted){
         alert("1000 INR Paid");
    }
    else{
         alert("froud pay");
    }
   
}
