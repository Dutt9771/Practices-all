// Case 1: 
//         Create a web application that contains three callbacks' functions.
//         One function that contains delay of 10s, once this is executed, second 
//         function will start executing (with 10s delay).
//         Once second function will be executed, third function will start 
//         executing (with 8s delay).
//         Each function will have console statement stated as "X function is 
//         start executing

let firfun = (x) => {
    setTimeout(() => {
        console.log("firfun function is start executing");
        x(thirfun);
    }, 10000)
}

let secfun = (y) => {
    setTimeout(() => {
        console.log("secfun function is start executing");
        y();
    }, 10000)
}

let thirfun = () => {
    setTimeout(() => {
        console.log("thirfun function is start executing")
    }, 8000)
}

firfun(secfun);