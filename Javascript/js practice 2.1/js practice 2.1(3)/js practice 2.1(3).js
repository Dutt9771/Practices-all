// Create a function that returns count from Array of objects where 
// age > x. x is dynamic.
// Example:
// Input: age = 25
// Array = [
// {
// id:”1”,
// name: "John”,
// age:”10”
// },
// {
// id:”2”,
// name: "doe”,
// age:”40”
// },
// {
// id:”3”,
// name: "Kathy”,
// age:”29”
// }
// ]
// Output: 2.


let Array = [
    {
        id: 1,
        name: "John",
        age: 10
    }, {
        id: 2,
        name: "doe",
        age: 40
    }, {
        id: 3,
        name: "Kathy",
        age: 29
    }
]
let checkArr = (arr, x) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].age > x) {
            count += 1
        }

    }
    return count
}
console.log(checkArr(Array, 25));