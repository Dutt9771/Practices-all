function logOut(){
    const date = new Date();
                SessObj = { "Name": userstoreName, "logout_date_time": date };
                let x = JSON.stringify([]);
                if (!localStorage.getItem('SessionOut')) {
                    localStorage.setItem('SessionOut', x);
                }
                let withDate = JSON.parse(localStorage.getItem('SessionOut'));
                withDate.push(SessObj);
                localStorage.setItem("SessionOut", JSON.stringify(withDate));

}

