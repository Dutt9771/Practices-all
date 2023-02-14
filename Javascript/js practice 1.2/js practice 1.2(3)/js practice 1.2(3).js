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

for (let Objar of Objarr) {

    let value = "name : " + Objar.name + "<br>Product : " + Objar.product +
            "<br>";
    document.write(value);

}
