const oBj = {
    Name: "Dutt Mistry",
    Age: 21,
    Address: " At Ahmedabad"
}
oBj.Name = "Priyanshu";

for (let key in oBj) {
    let value;

    // get the value
    value = oBj[key];
    document.write(key + " : " + value + '<br>');
}
