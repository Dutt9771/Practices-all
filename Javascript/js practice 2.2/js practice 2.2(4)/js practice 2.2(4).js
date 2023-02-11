let CalDob=(date,month,year)=>{
    const Months = [1,2,3,4,5,6,7,8,9,10,11,12];
    let D = new Date()
let currDate = D.getDate();
let currMonth = Months[D.getMonth()]
let currYear = D.getFullYear()

if (currYear >= year) {
    if (date <= 31) {
        if (month <= 12) {
            if (currDate > date) {
                console.log("Date : " + (
                    currDate - date
                ));
            } else {
                console.log("Date : " + (
                    date - currDate
                ));
            }
            if (currMonth > date) {
                console.log("Month : " + (
                    currMonth - month
                ));

            } else {
                console.log("Month : " + (
                    month - currMonth
                ));
            }

            console.log("Year : " + (
                currYear - year
            ));
        } else {
            console.log("Please Enter Valid Month")
        }
    } else {
        console.log("Please Enter Valid Date");
    }

} else {
    console.log(
        "Year you Write is Greater than the Current Year,Please Write Valid Year"
    );
}

}
CalDob(18, 10, 2002)
CalDob(32, 10, 2002)
CalDob(18, 14, 2002)
CalDob(18, 10, 2024)
