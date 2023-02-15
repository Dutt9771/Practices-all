function cells(){ 

            
    getData = JSON.parse(localStorage.getItem('Session'));
let myTable = document.getElementById('myTable');

for (i = 0; i < getData.length; i++) {
    
    let row = myTable.insertRow(-1)

    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
   

    cell1.innerHTML = getData[i].Name;
    cell2.innerHTML = getData[i].login_date_time;
   
}}
