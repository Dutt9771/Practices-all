// Create a function that returns the array of each letter passed as string via
// argument. 
// Example: Input: “abc” Output: [a,b,c]

let str = "abc";

let arr = (string) => {
    // let array=string.split("") console.log(array)
    let array = [];
    for (let i = 0; i < string.length; i++) {
        array[i] = string[i];

    }
    console.log(array)
}
arr(str)