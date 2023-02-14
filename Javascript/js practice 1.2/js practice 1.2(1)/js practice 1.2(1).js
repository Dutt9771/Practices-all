const oBj = {
    Name: "Dutt Mistry",
    Age: 21,
    Address: " At Ahmedabad"
}

for (let key in oBj) {
    let value;

    // get the value
    value = oBj[key];
    document.write(key + " : " + value + '<br>');
}

oBj.Name = "Priyanshu";
for (let key in oBj) {
    let value;

    // get the value
    value = oBj[key];
    document.write(key + " : " + value + '<br>');
}

document.write("After Change in the Object  ");
