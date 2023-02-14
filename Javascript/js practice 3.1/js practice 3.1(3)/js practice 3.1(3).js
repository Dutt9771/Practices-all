// Create a web application that contains three callbacks' functions. One
// function that contains delay of 10s, once this is executed, second function
// will start executing (with 10s delay). Once second function will be executed,
// third function will start executing (with 8s delay). Each function will have
// console statement stated as "X function is start executing"

let firfun = () => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            resolve("firfun  function is start executing")
        }, 10000)
    })
}

let secfun = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            resolve("secfun function is start executing")
        }, 10000)
    })
}

let thirfun = () => {

    setTimeout(() => {

        console.log("thirfun function is start executing")
    }, 8000)
}

firfun().then((resolve) => {
    console.log(resolve);
    secfun().then((resolve) => {
        console.log(resolve);
    });
    thirfun()
})