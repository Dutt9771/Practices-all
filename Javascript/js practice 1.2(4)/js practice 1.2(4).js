var Objarr = [
    {
        "name": "Dutt Mistry",

        "product": "speaker"
    }, {
        "name": "Marmorblad",
        "product": "Watch"
    }, {
        "name": "Aloe Vera",
        "product": "Mobile Phone"
    }
]

for (let key in Objarr) {
    let value;

    value = "name : " + Objarr[key].name + "<br>Product : " + Objarr[key].product +
            "<br>";
    document.write(value);

}
