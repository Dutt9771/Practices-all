// var arr= ['SQL', 'C#','C#','SQL', 'JavaScript','SQL','Python'];

// arr.sort()
// var count = 0;
// function countArr(array) {

//     var newarr = [];
//     for (var i = 0; i < array.length; i++) {
//         for (var j = 0; j < i; j++) {
//             if (array[i] == array[j]) {
//                 count++;
//                 newarr.push(array[j])
//                 newarr.push(count)
//             }
//         }
//     }
//     return count + newarr;

// }
// document.write(countArr(arr));

var value = [10,20,30,40]
// var value = 20;
var sum = 0;
function Var(array) {
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    console.log(sum);
}
Var(value)

let valuetwo = [10,20,30,40]
// let value = 20;
let sum = 0;
function Var(array) {
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    console.log(sum);
}
Var(valuetwo)