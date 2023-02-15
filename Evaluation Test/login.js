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

console.log(storeEmail)
console.log(storePass)
    if (email != "" || pwd != "") {
        if (email == storeEmail && pwd == storePass) {
            document.getElementById("msg").innerText="Welcome Admin";
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
                withDate.push(SessObj);
                localStorage.setItem("Session", JSON.stringify(withDate));
                if (userstoreEmail == email && userstorePass == pwd) {
                    document.getElementById("msg").innerText="Welcome User";
                    window.location.href = "userlogin.html";
                }
                
            }
        }
    } else {
        document.getElementById("msg").innerText="Please Enter All data";
       
    }
}