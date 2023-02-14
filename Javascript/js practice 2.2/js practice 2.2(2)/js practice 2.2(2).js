let BMI = (mass, height) => {
    let x = height ** 2
    console.log(x)
    let formula = mass / (x)
    return formula;
}
console.log(BMI(50, 2))

let BMIcalculate = () => {
    let mass = document
        .getElementById("mass")
        .value
    let height = document
        .getElementById("height")
        .value
        document
        .getElementById("show")
        .innerHTML = "Your BMI is " + BMI(mass, height)
}