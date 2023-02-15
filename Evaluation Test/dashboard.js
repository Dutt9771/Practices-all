function agediv() {
    loginStr = localStorage.getItem('Admin');
    loginObj = JSON.parse(loginStr);
    document
        .getElementById('username')
        .innerText = loginObj.Name;
    getData = JSON.parse(localStorage.getItem('Users'));
    let date = new Date();
    for (i = 0; i < getData.length; i++) {
        strDate = JSON.stringify(date);
        currentDate = strDate.slice(6, 11)
        let bDate = (getData[i].Birthdate).slice(5, 11);
        if (currentDate == bDate) {
            document
                .getElementById('displayBirthday')
                .innerHTML = "Today is '" + getData[i]
                .Name + "' Birthday."
        }
    }
}