function myFunction() {
    var checkBox = document.getElementById("yes");
    var text = document.getElementById("showfieldset");
    if (checkBox.checked == true){
      text.style.display = "block";
    } else {
       text.style.display = "none";
    }
  }

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
