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



const str1 = "hare krishna har ram hare kriswhna krishna"

const obj1 = {
    
};

for(let x of str1){
    if(obj1[x]){
        obj1[x] += 1;
    }
    else{
        obj1[x]=1
    }
}
console.log(obj1)



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




const user = { name: "John", age: 25 };
for (const key in user) {
  console.log(key + ": " + user[key]); // name: John, age: 25
}


const users = [
  { name: "John", age: 22 },
  { name: "Jane", age: 35 },
  { name: "Sam", age: 25 }
];

const Users = users.filter( user => user.age >= 25);
console.log(Users)
// Output: [{ name: "John", active: true }, { name: "Sam", active: true }]



const usersn = [
  { name: "John", age: 22 },
  { name: "Jane", age: 35 },
  { name: "Sam", age: 25 }
];

const result = [];
for (const user of usersn) {
  if (user.age <= 25) {
    result.push(user);
  }
}
console.log(result);
