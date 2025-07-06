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

    

function isValid(age) {
    if(age) {
        let x;
        var varMsg = "valid";
        }
        console.log(varMsg);
}

isValid(21);

function Human(fname,lNmae) {
    this.firstName = fname;
    this.lastName = lNmae;
}

const MrX = new Human("Mr", "X");
const Rock = Human("The", "Rock");

console.log(MrX);
console.log(Rock);


const text = '[ "Ford", "BMW", "Audi", "Fiat" ]';
const myArr = JSON.parse(text);
console.log(myArr)
console.log(typeof text)
console.log(typeof myArr)



const array = ["1","2","3","4","5"];
const strs = JSON.stringify(array);
console.log(strs)

console.log(typeof array); // "object" → because arrays are objects
console.log(typeof strs);  // "string" → JSON.stringify returns a string

