let water = (x) => {
    console.log("Adding Water")
    setTimeout(() => {
        console.log("Boil Water")
        x(milk);

    }, 5000)
}
let Tea = (y) => {
    console.log("Adding Tea leaves")
    setTimeout(() => {
        console.log("Added Tea Leaves")
        y();
    }, 2000)
}
let milk = () => {
    console.log("Add Milk")
}

water(Tea);
