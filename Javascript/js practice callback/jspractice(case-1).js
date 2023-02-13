let firfun=(x)=>{
    setTimeout(()=>{
        console.log("firfun function is start executing");
        x(thirfun);
    },10000)
}

let secfun=(y)=>{
    setTimeout(()=>{
        console.log("secfun function is start executing");
        y();
    },10000)
}

let thirfun=()=>{
    setTimeout(()=>{
        console.log("thirfun function is start executing")
    },8000)
}

firfun(secfun);