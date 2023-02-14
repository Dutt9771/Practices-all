// Write a JavaScript function that returns array elements larger 
// than a number, Array input should be dynamic.
// Example : 
// Input 
// Array = [2,4,4,1,0,3], number = 3 
// Output: [4,4];

let arr=[2,4,4,1,0,3];
let name = (array, number) => {
    let temp = [];
    for (let i = 0; i < array.length; i++) 
        if (array[i] > number) {
            temp.push(array[i])
        }
    return temp;

}
console.log(name(arr, 3))