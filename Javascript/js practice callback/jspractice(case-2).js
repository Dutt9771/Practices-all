// let datasend=()=>{
//     let y= document.getElementById("fname").value
//    let z = document.getElementById("lname").value
//    let w = document.getElementById("email").value
//    let q = document.getElementById("number").value
//     console.log(y);
//    if(y=="" || z=="" || w=="" || q==""){
//     alert("Please Enter All Fields");
//    }else{
//         x();
//    }
// }
// let valid=()=>{
//     console.log(y,z,w,q);
// }
function datasend(x) {
    var y = document
        .getElementById("fname")
        .value;
    var z = document
        .getElementById("lname")
        .value;
    var w = document
        .getElementById("email")
        .value;
    var q = document
        .getElementById("number")
        .value;

    if (y == "" || z == "" || w == "" || q == "") {
        alert("Please Enter All Fields");
    } else {
        x();
    }

}

function valid() {
    var y = document
        .getElementById("fname")
        .value;
    var z = document
        .getElementById("lname")
        .value;
    var w = document
        .getElementById("email")
        .value;
    var q = document
        .getElementById("number")
        .value;
    console.log(y, z, w, q)
}
