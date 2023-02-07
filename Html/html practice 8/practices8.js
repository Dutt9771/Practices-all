function submitdata() {
    var Firstname = "Firstname : " + document
        .getElementById('firstname')
        .value;
    document
        .getElementsByClassName('firstnamediv')[0]
        .innerHTML = Firstname;

    var Lastname = "Lastname : " + document.getElementById('lastname').value;
    document.getElementsByClassName('lastnamediv')[0].innerHTML = Lastname;

    var Date = "Date : " + document
        .getElementById('date')
        .value;
    document
        .getElementsByClassName('datediv')[0]
        .innerHTML = Date;

    var Gender = "Gender : " + document
        .getElementById('gender')
        .value;
    document
        .getElementsByClassName('genderdiv')[0]
        .innerHTML = Gender;

    var Email = "Email : " + document
        .getElementById('email')
        .value;
    document
        .getElementsByClassName('emaildiv')[0]
        .innerHTML = Email;

    var Securityquestions = "Security Question : " + document
        .getElementById(
            'securityquestions'
        )
        .value;
    document
        .getElementsByClassName('securityquestionsdiv')[0]
        .innerHTML = Securityquestions;

    var Securityanswer = "Security Answer : " + document
        .getElementById('securityanswer')
        .value;
    document
        .getElementsByClassName('securityanswerdiv')[0]
        .innerHTML = Securityanswer;

    var Address = "Address : " + document
        .getElementById('address')
        .value;
    document
        .getElementsByClassName('addressdiv')[0]
        .innerHTML = Address;

    var City = "City : " + document
        .getElementById('city')
        .value;
    document
        .getElementsByClassName('citydiv')[0]
        .innerHTML = City;

    var State = "State : " + document
        .getElementById('state')
        .value;
    document
        .getElementsByClassName('statediv')[0]
        .innerHTML = State;

    var Zipcode = "Zipcode : " + document
        .getElementById('zipcode')
        .value;
    document
        .getElementsByClassName('zipcodediv')[0]
        .innerHTML = Zipcode;

    var Telephone = "Telephone : " + document
        .getElementById('tel')
        .value;
    document
        .getElementsByClassName('telediv')[0]
        .innerHTML = Telephone;

}
