
function deleteUser() {
    myTable.deleteRow(-1)
    
     
}

function cells(){ 
    getData = JSON.parse(localStorage.getItem('Users'));
let myTable = document.getElementById('myTable');

for (i = 0; i < getData.length; i++) {
    

    let arr = [];
    arr.push(parseInt(getData[i].Birthdate.split("/")));
    let row = myTable.insertRow(-1)

    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    let cell6 = row.insertCell(5);

    cell1.innerHTML = getData[i].Name;
    cell2.innerHTML = getData[i].Email;
    cell3.innerHTML = getData[i].Password;
    cell4.innerHTML = getData[i].Birthdate.split("-").reverse().join("-")
    cell5.innerHTML = 2023 - arr[0];
    cell6.innerHTML = `<button onclick="">Edit</button><button onclick="deleteUser()">Delete</button>`;
 let Age= 2023-arr[0]
 
   console.log(arr)  
}}

function addUser() {
    let username = document
        .getElementById('name')
        .value
    let useremail = document
        .getElementById('email')
        .value
    let userpass = document
        .getElementById('password')
        .value
    let userdob = document
        .getElementById('date')
        .value

    userObj = {
        "Name": username,
        "Email": useremail,
        "Password": userpass,
        "Birthdate": userdob
    };
    
    let x = JSON.stringify([]);
    if (!localStorage.getItem('Users')) {
        localStorage.setItem('Users', x);
    }
    let userData = JSON.parse(localStorage.getItem('Users'));
    userData.push(userObj);
    localStorage.setItem("Users", JSON.stringify(userData));

    window
        .location
        .reload();

}

function edit() {
    document
        .getElementById("userbtn")
        .innerText = "Update User"
}

function username() {
    loginStr = localStorage.getItem('formData');
    loginObj = JSON.parse(loginStr);
    let storename = loginDataObj.fname;
    document
        .getElementById('username')
        .innerText = storename;
}

// let agediv=()=>{
//     let count=0
//     for(i=0;i<Age.length;i++){
//         if(Age[i]>18)
//     }
// }