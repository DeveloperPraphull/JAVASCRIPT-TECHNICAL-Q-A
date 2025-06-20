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