function AgeCalculate(Birthdate){
    var Arr=[]
    let date=new Date()
    strDate = JSON.stringify(date);
        let temp=JSON.stringify(Birthdate).slice(1,5)

        console.log(Birthdate)
        let currDate = strDate.slice(1, 5)
        let Age=currDate-temp;
        Arr.push(Age)
        console.log(Age)
        
    }
AgeCalculate("2002-10-18")

loginStr = localStorage.getItem('Admin');
loginObj = JSON.parse(loginStr);
    document
    .getElementById('username')
        .innerHTML = loginObj.Name;
function cells() {
    
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
    cell6.innerHTML = `<button onclick="edit(${i})">Edit</button><button onclick="deleteUser(${i})">Delete</button>`;
    let Age= 2023-arr[0]
    
    
}
}
function deleteUser(item){
    getData = JSON.parse(localStorage.getItem('Users'));
    // var parentRowIndex = currElement.parentNode.parentNode.rowIndex;
    getData.splice(item,1)

    // document.getElementById("myTable").deleteRow(item);
    localStorage.setItem("Users", JSON.stringify(getData))
    window.location.reload() 

   
}

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
      if(username!=="" || useremail!=="" || userpass!=="" || userdob!=="")  {

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
}else{
    document.getElementById("err").innerHTML="Please Enter All Details"
}
    
}


    function edit(index) {
        let users = JSON.parse(localStorage.getItem("Users"));
        let user = users[index];
        document.getElementById("name").value = user.Name;
        document.getElementById("email").value = user.Email;
        document.getElementById("password").value = user.Password;
        document.getElementById("date").value = user.Birthdate;
        document.getElementById("userbtn").innerHTML = "Update User";
        document.getElementById("userbtn").setAttribute("onclick", `updateUser(${index})`);
    }
    // Updating the user

function updateUser(index) {
    let users = JSON.parse(localStorage.getItem("Users"));
    let user = users[index];
    user.Name = document.getElementById("name").value;
    user.Email = document.getElementById("email").value;
    user.Password = document.getElementById("password").value;
    user.Birthdate = document.getElementById("date").value;
   let birth=user.Birthdate
    user.age = AgeCalculate(birth);
    localStorage.setItem("Users", JSON.stringify(users));
    document.getElementById("userbtn").innerHTML = "Add User";
    document.getElementById("userbtn").setAttribute("onclick", `addUser()`);
    window.location.reload()

        
        
}


function logOut() {

    getData = JSON.parse(localStorage.getItem('Session'));
    currUser = localStorage.getItem('SessionUser');
    for (let i = 0; i < getData.length; i++) {  
        let logoutTime = new Date();
    // let logout_time_date = { 'Logout_time_date': logoutTime };
    if (currUser == getData[i].Name) {
        getData[i].logout_date_time = logoutTime;
        console.log(typeof(JSON.stringify(getData)));
    }
}

localStorage.setItem('Session', JSON.stringify(getData));
window.location.href = 'login.html';
localStorage.removeItem('SessionUser');
}
