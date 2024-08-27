// Use Object.keys() and Object.values() to create a new object with only the keys and values that meet a certain condition.
// Example:
// const obj = { a: 1, b: 2, c: 3, d: 4 };

let obj={a:1,
    b:2,
    c:3,
    d:4
}
output={}
Object.keys(obj).forEach((x)=>{
    if(obj[x]<=3){
        output[x]=obj[x]
    }
})
console.log(output)



// Use Object.assign() to merge two objects and create a new object with the combined properties.
// Example:
// const obj1 = { a: 1, b: 2 };
// const obj2 = { c: 3, d: 4 };

let obj1={a:1,b:2}
let obj2={c:3,d:4}
let y=Object.assign(obj1,obj2)
console.log(y)



// Use Array.reduce() to sum up the values of an object's properties.
// Example:
// const obj = { a: 1, b: 2, c: 3, d: 4 };
// // Sum up the values of obj's properties using reduce();
// // Output: 10


const obj3={ a: 1, b: 2, c: 3, d: 4 }
outout=Object.values(obj).reduce((acc,curr)=>{
    acc=acc+curr
    return acc
}, 0)
console.log(outout)









