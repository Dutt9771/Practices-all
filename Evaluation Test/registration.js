function signUp() {
  
            let fname = document.getElementById('fname').value;
            let email = document.getElementById('email').value;
            let  pwd = document.getElementById('pwd').value;
            let city=document.getElementById("inputDistrict").value;
            let state=document.getElementById("inputState").value
          let checkbox=document.getElementById('checkbox').value
         Obj = {"Name": fname, "Email": email, "Password": pwd, "State": state, "City": city};
         let Details = JSON.stringify(Obj);
         localStorage.setItem("Admin", Details)
         let str = localStorage.getItem('Admin');
    let obJ = JSON.parse(str);
    let storename = obJ.Name;
    let storepwd=obJ.Password
         
if(fname=="" || email==""||pwd==""||city==""||state=="" || checkbox.checked==false){
  document.getElementById("msg").innerText="Please Enter All Field"
  
}else if(storename===email && storepwd===pwd){
  document.getElementById("msg").innerText="Already Register"
  window.location.assign('login.html')
}
else{
  document.getElementById("msg").innerText="Register Successful"
  console.log(storename)
         console.log(storepwd)
  window.location.assign('login.html')
  
}
          //  window.location.href="dashboard.html"

        

}
function matchPassword(elem) {  
    let pw = document.getElementById("pwd");  
    
    if(elem.value.length>0){ 
        if(elem.value != pw.value){  
      document.getElementById("pwderr").innerText="Password Not Same";  
    } else {  
      document.getElementById("pwderr").innerHTML=""  
    }  
  }else{
    document.getElementById("pwderr").innerText="Please Enter Same Password"
  }
} 