// let email = document
// .getElementById('email')
// .value;
// let pwd = document
// .getElementById('pwd')
// .value;
loginStr = localStorage.getItem('Admin');
loginObj = JSON.parse(loginStr);

let storeEmail = loginObj.Email;
let storePass = loginObj.Password;

if (storeEmail!="" && storePass!="") {
    document.getElementById("loginButton").style.display="none";
    document.getElementById("Ortag").style.display="none";
}


function login() {
    let email = document
    .getElementById('email')
    .value;
    let pwd = document
    .getElementById('pwd')
    .value;
    loginStr = localStorage.getItem('Admin');
    loginObj = JSON.parse(loginStr);
    
    userloginStr = localStorage.getItem('Users');
    userloginObj = JSON.parse(userloginStr);
    
    let storeEmail = loginObj.Email;
    let storePass = loginObj.Password;
    if (email != "" || pwd != "") {
        if (email == storeEmail && pwd == storePass) {
            document.getElementById("msg").innerText="Welcome Admin";
            for (i = 0; i < userloginObj.length; i++) {
                
                let userstoreName=userloginObj[i].Name;
                localStorage.setItem("SessionUser", userstoreName);
            }
            window
                .location
                .href=("dashboard.html")
        }else{
            for (i = 0; i < userloginObj.length; i++) {
                let userstoreEmail = userloginObj[i].Email;
                let userstorePass = userloginObj[i].Password;
                let userstoreName=userloginObj[i].Name;
                const date = new Date();
                SessObj = { "Name": userstoreName, "login_date_time": date};
                let x = JSON.stringify([]);
                if (!localStorage.getItem('Session')) {
                localStorage.setItem('Session', x);
                }
                let withDate = JSON.parse(localStorage.getItem('Session'));
                withDate.push(  );
                localStorage.setItem("Session", JSON.stringify(withDate));
                if (userstoreEmail == email && userstorePass == pwd) {
                    document.getElementById("msg").innerText="Welcome User";
                    window.location.href = "userlogin.html";
                }
                localStorage.setItem("SessionUser", userstoreName);
            }
        }
    } else {
        document.getElementById("msg").innerText="Please Enter All data";
       
    }
}