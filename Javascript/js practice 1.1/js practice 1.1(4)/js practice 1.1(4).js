function validate() {
    var phone = document
        .getElementById("tel")
        .value;
    var email = document
        .getElementById("email")
        .value;
    var name = document
        .getElementById("name")
        .value;
    (email == "")
        ? document
            .getElementById("msgemail")
            .innerHTML = "Email id is Empty,Please Enter It."
        : document
            .getElementById("msgemail")
            .innerHTML = "";
    (name == "")
        ? document
            .getElementById("msgname")
            .innerHTML = "Name is Empty,Please Enter It."
        : document
            .getElementById("msgname")
            .innerHTML = "";

    (phone == "")
        ? document
            .getElementById("msgtel")
            .innerHTML = "Telephone is Empty,Please Enter It."
        : (8 <= phone.length <= 10)
            ? document
                .getElementById("msgtel")
                .innerHTML = ""
            : document
                .getElementById("msgtel")
                .innerHTML = "Phone Number Must Be 10 digits."

    if (email != "" && phone != "" && name != "") {
        document
            .getElementById("msgvalidate")
            .innerHTML = "Name,Email and Phone Validated";
    }
}