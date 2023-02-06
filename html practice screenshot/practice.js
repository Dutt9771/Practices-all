/*function myFunction() {
    var checkBox = document.getElementById("yes");
    var text = document.getElementById("showfieldset");
    if (checkBox.checked == true){
      text.style.display = "block";
    } else {
       text.style.display = "none";
    }
  }
*/
function spouseYes() {
    var checkspouse = document.getElementById("spouseyes");
    var checktext = document.getElementById("spouseshow");
    if (checkspouse.checked == true) {
        checktext.style.display = "block";
    }
    else {
        checktext.style.display = "none";
    }

}
function spouseNo() {
    var checkspouse = document.getElementById("spouseyes");
    var checktext = document.getElementById("spouseshow");
    if (checkspouse.checked == true) {
        checktext.style.display = "none";
    }
    else {
        checktext.style.display = "none";
    }

}
function expenseYes(){
    var expenseYes = document.getElementById("expenseyes");
    var expenseshow = document.getElementById("expenseshow");
    if(expenseYes.checked==true){
        expenseshow.style.display="block";
    }
    else{
        expenseshow.style.display="none";
    }
}
function expenseNo(){
    var expenseYes = document.getElementById("expenseyes");
    var expenseshow = document.getElementById("expenseshow");
    if(expenseYes.checked==true){
        expenseshow.style.display="none";
    }
    else{
        expenseshow.style.display="none";
    }
}
function add(){
    
    var row = document.getElementById("drugtable");
    var add = row.insertRow(-1);
    var x=add.insertCell(0);
    var y =add.insertCell(1);
    var z =add.insertCell(2);
    var w =add.insertCell(3);
    x.innerHTML= document.getElementById("tabletext").value;
   y.innerHTML= document.getElementById("tabledate").value;
    z.innerHTML= document.getElementById("relationtext").value;
    w.innerHTML= document.getElementById("charges").value= "₹ 2,00,000.00" ;
}

function resetdata() {
    
        var getValue= document.getElementById("tabletext");
          if (getValue.value !="") {
              getValue.value = "";
          }
          var getValue= document.getElementById("tabledate");
          if (getValue.value !="") {
              getValue.value = "";
          }
          var getValue= document.getElementById("relationtext");
          if (getValue.value !="") {
              getValue.value = "";
          }
          
}