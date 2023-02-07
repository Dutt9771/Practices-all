var pdetail = {
    name: "Dutt ",
    age: 5,
    
}
var detail = {
    college: "SSEC, Bhavnagar",
    
    address: "Ahmedabad"
}

function newObj(firstObj, secondObj) {
    let thirdObj = new Object();
    thirdObj={firstObj , secondObj}
    return thirdObj;
    
}
console.log(newObj(pdetail , detail))
